package com.hipmap.global.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Slf4j
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
        String exception = (String)request.getAttribute("exception");
        String errorCode;

        log.debug("log: exception: {} ", exception);

        if(exception == null) {
            errorCode = "Unauthorized";
            setResponse(response, errorCode);
            return;
        }

        if(exception.equals("Expired")) {
            errorCode = "Expired";
            setResponse(response, errorCode);
            return;
        }

        if(exception.equals("Invalid")) {
            errorCode = "Invalid";
            setResponse(response, errorCode);
        }
    }

    private void setResponse(HttpServletResponse response, String errorMsg) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().println("{ \"message\" : \"" + errorMsg
                + ",\n}");
    }

}