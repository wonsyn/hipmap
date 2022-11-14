package com.hipmap.domain.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hipmap.TestDatasourceConfig;
import com.hipmap.domain.jwt.dto.JwtUserInfo;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import com.hipmap.domain.user.dto.request.UserEditRequest;
import com.hipmap.domain.user.dto.request.UserLoginRequest;
import com.hipmap.domain.user.dto.request.UserRegistRequest;
import com.hipmap.global.util.JwtUtil;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

// junit4 사용 시, JUnit의 SpringJUnit4ClassRunner 클래스를 상속 받는 @RunWith(SpringRunner.class)와 함께 사용해야 한다.
// junit5 사용 시, 명시할 필요없음
@RunWith(SpringRunner.class)

@ActiveProfiles({"test", "EmailAuth"})
@ContextConfiguration(classes = {TestDatasourceConfig.class})
@SpringBootTest // 통합테스트 시 사용
//@WebMvcTest(UserController.class) // 웹계층만 관련된 항목만 빈 등록
// @WebMvcTest, @DataJpaTest, @RestClientTest, @JsonTest 단위테스트 시 사용
@AutoConfigureMockMvc // Mock 테스트시 필요한 의존성을 제공해준다.
@Transactional
public class UserControllerTest {


    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    JwtUtil jwtUtil;

    @Before
    public void setUp() {
        createUser("wondoll", "password", "email@email.com");
    }

    private void createUser(String username, String password, String email) {
        userRepository.save(UserEntity.builder()
                .username(username)
                .password(passwordEncoder.encode(password))
                .email(email)
                .nickname("test")
                .role(Admin.ROLE_USER)// 최초 가입시 USER 로 설정
                .proImgSrc(null)
                .labelCharSrc(null)
                .labelName("테스터")
                .followPrivate(false)
                .regDateTime(LocalDateTime.now())
                .isCerted(false)
                .build());
    }

    @Test
    public void 로그인_성공() throws Exception {
        // given
        // objectMapper를 이용해서 요청을 보낼 객체를 생성해준다.
        String object = objectMapper.writeValueAsString(UserLoginRequest.builder()
                .username("wondoll")
                .password("password")
                .build());

        String token = getAccessToken("wondoll");

        // when
        // perform(): MockMvc가 수행할 행동을 정의해준다.
        ResultActions actions = mockMvc.perform(post("/user/login") // URL을 받아서 http method를 수행한다.
                .content(object) // @RequestBody
                .contentType(MediaType.APPLICATION_JSON) // contentType을 json으로 설정
                .accept(MediaType.APPLICATION_JSON) // header를 json으로 설정
        );
        // then
        // 일어난 결과에 대해 검증한다.
        actions.andDo(print()) // andDo: perform요청을 처리한다.
                // andExpect(): 검증내용을 체크한다.
                .andExpect(status().isOk())// jsonPath(): 반환된 json 객체에 대해서도 체크 가능하다.
                .andExpect(jsonPath("$.tokens.accessToken").value(token));// HTTP response Code 200 인지 확인
        // andReturn(): MvcResult 객체로 반환시켜준다.
    }

    private JwtUserInfo getJwtUserInfo(UserEntity user) {
        return JwtUserInfo.builder()
                .id(user.getUserId())
                .username(user.getUsername())
                .build();
    }

    @Test
    public void 회원가입_성공() throws Exception {
        // given
        long time = LocalDateTime.now().atZone(ZoneId.systemDefault()).toEpochSecond();

        // when
        String object = objectMapper.writeValueAsString(UserRegistRequest.builder()
                .username("wondoll1")
                .password("password")
                .labeling("테스트 힙스터")
                .nickname("test")
                .email("email@email.com" + time)
                .build());
        ResultActions actions = mockMvc.perform(
                post("/user/regist")
                        .content(object)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
        );
        // then
        actions.andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    public void 회원가입_실패_이메일중복() throws Exception {
        // given
        String object = objectMapper.writeValueAsString(UserRegistRequest.builder()
                .username("wondoll")
                .email("email@email.com")
                .password("password")
                .labeling("테스트 힙스터")
                .nickname("test")
                .build());
        // when
        ResultActions actions = mockMvc.perform(
                post("/user/regist")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .content(object));
        // then
        actions.andDo(print())
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$").value("이미 가입된 이메일입니다."));
    }

    @Test
    public void 로그인_실패_잘못된정보() throws Exception {
        // given
        String object = objectMapper.writeValueAsString(UserLoginRequest.builder()
                .username("wondoll")
                .password("wrongPassword")
                .build());
        // when
        ResultActions actions = mockMvc.perform(post("/api/user/login")
                .content(object)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON));
        // then
        actions.andDo(print())
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void 유저정보_수정_성공() throws Exception {
        // given
        String object = objectMapper.writeValueAsString(
                UserEditRequest.builder()
                        .nickname("test")
                        .followPrivate(true)
                        .label("테스터")
                        .build());

        String accessToken = getAccessToken("wondoll");

        HttpHeaders headers = new HttpHeaders();
        headers.add("accessToken", accessToken);
        // when
        ResultActions actions = mockMvc.perform(
                put("/user/edit")
                        .content(object)
                        .headers(headers)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
        );
        // then
        actions.andDo(print())
                .andExpect(status().isOk());
    }

    private String getAccessToken(String username) {
        UserEntity user = userRepository.findByUsername(username).orElseThrow(UserNotFoundException::new);

        JwtUserInfo userInfo = getJwtUserInfo(user);

        String accessToken = jwtUtil.generateToken(userInfo.toEntity());
        return accessToken;
    }

    @Test
    public void 아이디_중복_확인() throws Exception {
        // when
        ResultActions actions = mockMvc.perform(get("/user/wondoll/exists")

                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON));

        // then
        actions.andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.result").isBoolean());

    }


    @Test
    public void 유효하지않은_토큰() throws Exception {
        // given
        String object = objectMapper.writeValueAsString(
                UserEditRequest.builder()
                        .nickname("test")
                        .followPrivate(true)
                        .label("테스터")
                        .build());

        UserEntity user = userRepository.findByUsername("wondoll").orElseThrow(UserNotFoundException::new);

        JwtUserInfo userInfo = getJwtUserInfo(user);

        String accessToken = "wrong.token";
        HttpHeaders headers = new HttpHeaders();
        headers.add("accessToken", accessToken);

        // when
        ResultActions actions = mockMvc.perform(
                put("/user/edit")
                        .content(object)
                        .headers(headers)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
        );


        // then
        actions.andDo(print())
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.message").value("Invalid"));
    }

    @Test
    public void 토큰없음() throws Exception {
        // given
        String object = objectMapper.writeValueAsString(
                UserEditRequest.builder()
                        .nickname("test")
                        .followPrivate(true)
                        .label("테스터")
                        .build());

        UserEntity user = userRepository.findByUsername("wondoll").orElseThrow(UserNotFoundException::new);

        JwtUserInfo userInfo = getJwtUserInfo(user);

        // when
        ResultActions actions = mockMvc.perform(
                put("/user/edit")
                        .content(object)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andDo(print())
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.message").value("Unauthorized"));
    }

}