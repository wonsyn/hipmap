package com.hipmap.domain.user;

import com.hipmap.global.util.JwtUtil;
import com.hipmap.global.util.RedisUtil;
import com.hipmap.domain.jwt.dto.JwtUserInfo;
import com.hipmap.domain.user.dto.request.UserLoginRequest;
import com.hipmap.domain.user.dto.request.UserRegistRequest;
import com.hipmap.domain.user.dto.response.UserLoginResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Api(tags = {"회원"})
public class UserController {
    private final UserService userService;
    private final JwtUtil jwtUtil;
    private final RedisUtil redisUtil;

    @PostMapping("/regist")
    @ApiOperation(value = "회원가입", notes = "입력받은 회원정보를 이용해 가입 진행")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ResponseEntity<?> regist(@RequestBody UserRegistRequest userInfo){
        userService.regist(userInfo);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    @ApiOperation(value = "로그인", notes = "입력받은 회원정보를 이용해 로그인 진행")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 204, message = "로그인 정보 없음"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public UserLoginResponse login(@RequestBody UserLoginRequest user) {
        Map<String, String> map = new HashMap<>();
        final JwtUserInfo userInfo = userService.login(user.getUsername(), user.getPassword());
        final String token = jwtUtil.generateToken(userInfo.toEntity());
        final String refreshJwt = jwtUtil.generateRefreshToken(userInfo.toEntity());
        redisUtil.setDataExpire(refreshJwt, userInfo.getUsername(), JwtUtil.REFRESH_TOKEN_VALIDATION_SECOND);
        map.put(JwtUtil.ACCESS_TOKEN_NAME, token);
        map.put(JwtUtil.REFRESH_TOKEN_NAME, refreshJwt);

        return UserLoginResponse.builder()
                .tokens(map)
                .expireMilliSec(JwtUtil.TOKEN_VALIDATION_SECOND)
                .build();
    }
}
