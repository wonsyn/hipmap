package com.hipmap.domain.follow;

import com.hipmap.domain.user.UserEntity;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = FollowController.class)
class FollowControllerTest {

    @Autowired
    private MockMvc mvc;

    /* @Mock어노테이션을 붙여서 선언된 guestbookService는
     * Mockito에 의해 Mock객체로 생성된다.(Mock : 모조품(가짜))  */
    @Mock
    FollowServiceImpl followService;

    // Mock 객체가 주입되어 객체가 생성됨.
    @InjectMocks
    public FollowController followController;

    @BeforeEach
    public void before(){
        // @Mock 주석이 달린 개체를 초기화하려면 특정 메서드를 호출해야 합니다.
        MockitoAnnotations.openMocks(this);

        /* MockMVC타입의 변수 mockMvc를 초기화 한다.
         * FollowController를 테스트 하기 위한 MockMvc객체를 생성한다.*/
        mvc = MockMvcBuilders.standaloneSetup(followController).build();
    }



    @Test
    void create() throws Exception {
        // given
        // when
        // then
        String opponentUsername = "ssafy3";
        String username = "ssafy1";

        RequestBuilder request = MockMvcRequestBuilders.get("/follow/"+opponentUsername);
        mvc.perform(request).andExpect(content().string("성공"));
    }

    @Test
    void delete_follow() throws Exception {
        // given
        // 유저 생성
        UserEntity loginUser = new UserEntity();
        UserEntity opponentUser = new UserEntity();

        // 팔로우 추가
        followService.createFollow(loginUser.getUserId(), opponentUser.getUserId());
        // list에 방명록 한 건을 저장
        String opponentUsername = "ssafy3";
        String username = "ssafy1";

        // when(Mock객체.Mock객체메소드호출()).thenReturn(Mock객체 메소드가 리턴 할 값)
        /* guestbookService.getGuestbooks(0) 호출되면
         * list 객체가 리턴되도록 설정  */
//        when(followService.deleteFollow(username, opponentUsername)).thenReturn(1L);

        /* "/follow/opponentUsername" 경로를 DELETE 방식으로 호출하기 위한
         * 경로 정보를 가지고 있는 reqBuilder객체를 생성   */
        RequestBuilder reqBuilder = MockMvcRequestBuilders
                .delete("/follow/" + opponentUsername).contentType(MediaType.APPLICATION_JSON);
        // then
        // reqBuilder에 해당하는 URL을 호출한 후, 상태 코드가 200일 경우 성공합니다. 그리고 결과를 출력
        mvc.perform(reqBuilder).andExpect(status().isOk()).andDo(print());

        /* followService Mock 객체의 delete(opponentUsername, "127.0.0.1")
         * 메소드가 Web API가 동작하면서 호출되었다면 성공 */
//        verify(followService).deleteFollow(opponentUsername, "127.0.0.1");

    }

    @Test
    void findAllByUsername() throws Exception {
    }

    @Test
    void findAllByFollowingUser() {
    }

    @Test
    void findByUsername() {
    }

    @Test
    void getCountMyFollowers() {
    }

    @Test
    void getCountFollowing() {
    }
}