package com.hipmap.global.config;

import com.hipmap.domain.user.UserService;
import com.hipmap.global.util.JwtUtil;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
public class JwtRequestFilter extends OncePerRequestFilter {
    private final UserService userDetailsService;
    private final JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        final String jwtToken = httpServletRequest.getHeader(JwtUtil.ACCESS_TOKEN_NAME);
        String username = null;
        String jwt = null;

        try{
            if(jwtToken != null){
                jwt = jwtToken;
                username = jwtUtil.getUsername(jwt);
            } else {
                httpServletResponse.setStatus(401);
                filterChain.doFilter(httpServletRequest,httpServletResponse);
//                throw new AuthenticationException("cannot find JWT token ");
            }
            if(username!=null) {
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);

                try {
                    if (jwtUtil.validateToken(jwt, userDetails)) {
                        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                        usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
                        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                    }
                } catch (IllegalArgumentException e) {
                    System.out.println("예외 발생 JWT null");
                    filterChain.doFilter(httpServletRequest,httpServletResponse);
                }
            } else {
                httpServletResponse.setStatus(401);
                filterChain.doFilter(httpServletRequest,httpServletResponse);
//                throw new IllegalTokenException("올바르지 않은 토큰");
            }
        } catch (ExpiredJwtException e){
            httpServletResponse.setStatus(401);
            filterChain.doFilter(httpServletRequest,httpServletResponse);
//            throw new AuthenticationException("expired access token; call /api/jwt/re-issue before you call other API");
        }

        filterChain.doFilter(httpServletRequest,httpServletResponse);
    }
}