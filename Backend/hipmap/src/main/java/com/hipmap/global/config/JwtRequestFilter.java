package com.hipmap.global.config;

import com.hipmap.domain.jwt.Exception.IllegalTokenException;
import com.hipmap.global.util.JwtUtil;
import com.hipmap.domain.user.UserService;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.security.sasl.AuthenticationException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    private final UserService userDetailsService;
    private final JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        String path = httpServletRequest.getRequestURI();
        System.out.println("path: " + path);
        if ("/api/user/login".equals(path) || "/api/user/regist".equals(path) || "/api/jwt/re-issue".equals(path) ||
            path.equals("/api/") || path.matches("/api/user(.*)/exists") || path.matches("/api/user/auth/(.*)") ||
            path.matches("/api/v2/api-docs(.*)") || path.matches("/api/configuration/ui(.*)") || path.matches("/api/swagger-resources(.*)") ||
            path.matches("/api/configuration/security(.*)") || path.matches("/api/swagger-ui.html(.*)") || path.matches("/api/webjars(.*)") ||
            path.matches("/api/swagger(.*)")
        ) {
            filterChain.doFilter(httpServletRequest, httpServletResponse);
            return;
        }

        final String jwtToken = httpServletRequest.getHeader(JwtUtil.ACCESS_TOKEN_NAME);
        String username = null;
        String jwt = null;


        try{
            if(jwtToken != null){
                jwt = jwtToken;
                username = jwtUtil.getUsername(jwt);
            } else {
                httpServletResponse.setStatus(401);
                throw new AuthenticationException("cannot find JWT token ");
            }
            if(username!=null) {
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);

                if (jwtUtil.validateToken(jwt, userDetails)) {
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }
            } else {
                httpServletResponse.setStatus(401);
                throw new IllegalTokenException("올바르지 않은 토큰");
            }
        } catch (ExpiredJwtException e){
            httpServletResponse.setStatus(401);
            throw new AuthenticationException("expired access token; add \"refresh_token\" at HEADER");
        }

        filterChain.doFilter(httpServletRequest,httpServletResponse);
    }
}