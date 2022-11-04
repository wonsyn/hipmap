package com.hipmap.domain.jwt;

import com.hipmap.domain.jwt.dto.response.ReIssueResponse;
import com.hipmap.domain.jwt.dto.response.RefreshResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
@RequestMapping("/jwt")
@Api(tags = {"JWT Token"})
public class JwtController {
    private final JwtService jwtService;

    @GetMapping("/re-issue")
    @ApiOperation(value = "Token 재발급", notes = "기존 refreshToken을 이용해 accessToken과 refreshToken을 재발급 받는 요청")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공"),
            @ApiResponse(code = 401, message = "만료된 refreshToken 전송"),
            @ApiResponse(code = 500, message = "서버 에러")
    })
    public ReIssueResponse reIssue(HttpServletRequest request) {
        String refreshToken = request.getHeader("refreshToken");
        return jwtService.reIssue(refreshToken);
    }

    @GetMapping("/refresh")
    @ApiOperation(value = "유저 정보 재발급", notes = "새로고침 시 access-token을 이용해 유저 정보 재발급")
    @ApiResponses({
            @ApiResponse(code = 200, message = "요청 성공")
    })
    public RefreshResponse refresh(HttpServletRequest request) {
        String accessToken = request.getHeader("accessToken");
        return jwtService.refresh(accessToken);
    }
}
