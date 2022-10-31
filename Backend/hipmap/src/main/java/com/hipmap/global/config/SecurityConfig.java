package com.hipmap.global.config;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtRequestFilter jwtRequestFilter;
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
            return (web) -> web.ignoring().antMatchers("/api/user/login","/api/v2/api-docs",  "/api/configuration/ui",
                    "/api/swagger-resources", "/api/configuration/security",
                    "/api/swagger-ui.html", "/api/webjars/**","/api/swagger/**").mvcMatchers("/api/user/regist")
                    .and().ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations());
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http.csrf().disable();
        http.httpBasic().disable()
                        .authorizeRequests()
//                        .antMatchers("/swagger-resources/**").permitAll() // swagger
//                        .antMatchers("/api/join", "/user/regist", "/user/login").permitAll()
//                        .antMatchers("/api/admin/**").hasRole("ADMIN")
//                        .antMatchers("/api/user/**").hasRole("USER")
//                        .antMatchers("/**").permitAll()
                        .anyRequest().permitAll();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//        http.authorizeHttpRequests((authz) -> authz
//                        .anyRequest().authenticated())
//                .httpBasic(withDefaults());
//        http.authorizeHttpRequests()
//                    .anyRequest()	// 모든 요청에 대해서 허용하라.
//                    .permitAll()
//                .and()
//                    .logout()
//                    .logoutSuccessUrl("/")	// 로그아웃에 대해서 성공하면 "/"로 이동
//                .and()
//                    .oauth2Login()
//                    .defaultSuccessUrl("/")
//                    .userInfoEndpoint()
//                    .userService(customOAuth2UserService);	// oauth2 로그인에 성공하면, 유저 데이터를 가지고 우리가 생성한
        // customOAuth2UserService에서 처리를 하겠다. 그리고 "/login-success"로 이동하라.
        return http.build();
    }

//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.cors().and().csrf().disable();
//        http.httpBasic().disable()
//                        .authorizeRequests()
//                        .antMatchers("/swagger-resources/**").permitAll() // swagger
//                        .antMatchers("/user/join", "/user/login").permitAll()
////                        .antMatchers("/api/admin/**").hasRole("ADMIN")
////                        .antMatchers("/api/user/**").hasRole("USER")
//                        .antMatchers("/**").permitAll();
//
//        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
//    }
//
//    @Override
//    public void configure(WebSecurity web) throws Exception {
//        web.ignoring().antMatchers("/user/login","/v2/api-docs",  "/configuration/ui",
//                    "/swagger-resources", "/configuration/security",
//                    "/swagger-ui.html", "/webjars/**","/swagger/**", "/user/regist")
//                    .and().ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations());
//    }
}
