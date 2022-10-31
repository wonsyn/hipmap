package com.hipmap.global.config;

import com.hipmap.domain.oauth2.CustomOAuth2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Autowired
    private CustomOAuth2Service customOAuth2UserService;

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
            return (web) -> web.ignoring().antMatchers("/ignore1", "/ignore2")
                    .and().ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations());
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http.authorizeHttpRequests((authz) -> authz
//                        .anyRequest().authenticated())
//                .httpBasic(withDefaults());
        http.authorizeHttpRequests()
                    .anyRequest()	// 모든 요청에 대해서 허용하라.
                    .permitAll()
                .and()
                    .logout()
                    .logoutSuccessUrl("/")	// 로그아웃에 대해서 성공하면 "/"로 이동
                .and()
                    .oauth2Login()
                    .defaultSuccessUrl("/")
                    .userInfoEndpoint()
                    .userService(customOAuth2UserService);	// oauth2 로그인에 성공하면, 유저 데이터를 가지고 우리가 생성한
        // customOAuth2UserService에서 처리를 하겠다. 그리고 "/login-success"로 이동하라.
        return http.build();
    }
}
