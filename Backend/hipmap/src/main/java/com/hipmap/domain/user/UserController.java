package com.hipmap.domain.user;

import com.hipmap.domain.follow.FollowService;
import com.hipmap.domain.user.Exception.EmailAuthNotFoundException;
import com.hipmap.domain.user.dto.request.UserEditRequest;
import com.hipmap.domain.user.dto.request.UserLoginRequest;
import com.hipmap.domain.user.dto.request.UserRegistRequest;
import com.hipmap.domain.user.dto.response.ReadUserInfoResponse;
import com.hipmap.domain.user.dto.response.UserIdDupCheckResponse;
import com.hipmap.domain.user.dto.response.UserLoginResponse;
import com.hipmap.domain.user.dto.response.UserReadResponse;
import com.hipmap.global.util.JwtUtil;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Api(tags = {"회원"})
public class UserController {
    private final UserService userService;
    private final FollowService followService;
    private final JwtUtil jwtUtil;
    private final AuthEmailService authEmailService;

    @PostMapping("/regist")
    @ApiOperation(value = "회원가입", notes = "입력받은 회원정보를 이용해 가입 진행")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ResponseEntity<Void> regist(@RequestBody UserRegistRequest userInfo){
        userService.regist(userInfo);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    @ApiOperation(value = "로그인", notes = "입력받은 회원정보를 이용해 로그인 진행")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 404, message = "로그인 정보 없음"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public UserLoginResponse login(@RequestBody UserLoginRequest user) {
        return userService.login(user.getUsername(), user.getPassword());
    }

    @GetMapping("/{username}/exists")
    @ApiOperation(value = "아이디 중복확인", notes = "입력받은 ID로 가입이 가능한지 체크")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public UserIdDupCheckResponse idCheck(@PathVariable String username) {
        return UserIdDupCheckResponse.builder().result(userService.idCheck(username)).build();
    }

    @PutMapping("/edit")
    @ApiOperation(value = "유저 정보 수정", notes = "입력받은 정보로 유저 정보를 수정한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 401, message = "유저 정보 없음 (access token)"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ResponseEntity<Void> update(@RequestBody UserEditRequest userInfo, HttpServletRequest request) {
        userService.update(jwtUtil.getUserInfo(request.getHeader("accessToken")).getId(),
                userInfo.getNickname(), userInfo.getLabel(), userInfo.isFollowPrivate());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{userId}")
    @ApiOperation(value = "유저 정보 조회", notes = "입력받은 유저 고유 ID(Long)로 유저 정보를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 204, message = "유저 정보 없음(존재하지 않는 유저)"),
            @ApiResponse(code = 401, message = "유저 정보 없음 (access token)"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ReadUserInfoResponse readInfo(@PathVariable Long userId, HttpServletRequest request) {
        Long loginUserId = jwtUtil.getUserInfo(request.getHeader("accessToken")).getId();
        Boolean isFollow = followService.followConfirm(loginUserId, userId);
        UserReadResponse userReadResponse = userService.readInfo(userId);

        return ReadUserInfoResponse.builder()
                .isFollow(isFollow)
                .userInfo(userReadResponse)
                .build();
    }

    @DeleteMapping
    public ResponseEntity<?> deleteUser(HttpServletRequest request) {
        Long userId = jwtUtil.getUserInfo(request.getHeader("accessToken")).getId();

        userService.deleteUser(userId);
        return ResponseEntity.ok().body("회원 탈퇴 완료");
    }

    @GetMapping("/auth/{key}")
    @ApiOperation(value = "유저 이메일 인증", notes = "이메일 인증 링크를 클릭 시 도달하는 API")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ResponseEntity<Void> authEmail(@PathVariable String key) throws EmailAuthNotFoundException, URISyntaxException {
        authEmailService.authEmail(key);
        URI redirectUri = new URI("https://www.naver.com/");
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setLocation(redirectUri);
        return new ResponseEntity<>(httpHeaders, HttpStatus.SEE_OTHER);
    }

    @PostMapping("/profile/img")
    @ApiOperation(value = "유저 프로필 사진 변경", notes = "요청한 파일을 S3에 저장 후, 프로필 사진으로 등록해주는 API")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 400, message = "해당하는 유저가 없음. 또는 업로드 실패"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ResponseEntity<String> uploadProfileImg(@ApiParam(value = "업로드 할 파일") MultipartFile file, HttpServletRequest request) {
        Long userId = jwtUtil.getUserInfo(request.getHeader("accessToken")).getId();
        userService.uploadProfile(file, userId);
        return ResponseEntity.ok().body("업로드 성공");
    }

    @DeleteMapping("/profile/img")
    @ApiOperation(value = "유저 프로필 사진 삭제", notes = "현재 프로필 사진을 삭제해주는 API")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 400, message = "해당하는 유저가 없음"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ResponseEntity<String> deleteProfileImg(HttpServletRequest request) {
        Long userId = jwtUtil.getUserInfo(request.getHeader("accessToken")).getId();
        userService.deleteProfile(userId);
        return ResponseEntity.ok().body("삭제 성공");
    }
}
