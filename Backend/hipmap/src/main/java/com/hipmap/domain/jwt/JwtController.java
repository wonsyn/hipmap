package com.hipmap.domain.jwt;

import com.hipmap.domain.jwt.dto.response.ReIssueResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
@RequestMapping("/jwt")
public class JwtController {
    private final JwtService jwtService;

    @PostMapping("/re-issue")
    public ReIssueResponse reIssue(HttpServletRequest request) {
        String refreshToken = request.getHeader("refreshToken");
        return jwtService.reIssue(refreshToken);
    }
}
