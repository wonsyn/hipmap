package com.hipmap.global.config;

import com.hipmap.domain.user.UserService;
import com.hipmap.global.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final UserService userDetailsService;
    private final JwtUtil jwtUtil;
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web
                .ignoring()
                .antMatchers("/csrf/**")
                .antMatchers("/swagger-resources/**", "/configuration/security/**", "/swagger-ui.html/**",
                        "/webjars/**","/swagger/**", "/v2/api-docs/**",  "/configuration/ui/**")
                .and()
                .ignoring()
                .requestMatchers(PathRequest.toStaticResources().atCommonLocations());
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable().oauth2Login()
                .and()
                .cors().configurationSource(corsConfigurationSource())
        ;
        http.httpBasic().disable()
                .formLogin().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new CustomAuthenticationEntryPoint())
                .accessDeniedHandler(new CustomAccessDeniedHandler())
                .and()
                .addFilterBefore(new JwtRequestFilter(userDetailsService, jwtUtil), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
                    .antMatchers("/swagger-resources/**").permitAll() // swagger
                    .antMatchers("/", "/user/login", "/user/regist").permitAll()
                    .antMatchers("/jwt/re-issue").permitAll()
                    .antMatchers("/user/**/exists", "/user/auth/**").permitAll()
                    .antMatchers("/oauth/**").permitAll()
                    .antMatchers("/subscribe").permitAll()
                    .antMatchers("/**").hasAnyRole("USER", "ADMIN")
                    .anyRequest().authenticated();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        return http.build();
    }

    // CORS 허용 적용
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOriginPattern("*");
//        configuration.addAllowedOriginPattern("http://localhost:3000");
//        configuration.addAllowedOrigin("http://k7b108.p.ssafy.io");
//        configuration.addAllowedOrigin("https://k7b108.p.ssafy.io");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
