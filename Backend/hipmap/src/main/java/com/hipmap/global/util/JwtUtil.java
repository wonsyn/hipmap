package com.hipmap.global.util;

import com.hipmap.domain.jwt.Exception.IllegalTokenException;
import com.hipmap.domain.jwt.dto.JwtUserInfo;
import com.hipmap.domain.user.Admin;
import com.hipmap.domain.user.UserEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    public final static long TOKEN_VALIDATION_SECOND = 1000L * 60 * 60;
    public final static long REFRESH_TOKEN_VALIDATION_SECOND = 1000L * 60 * 60 * 24 * 2;

    final static public String ACCESS_TOKEN_NAME = "accessToken";
    final static public String REFRESH_TOKEN_NAME = "refreshToken";

    @Value("${spring.jwt.secret}")
    private String SECRET_KEY;

    private Key getSigningKey(String secretKey) {
        byte[] keyBytes = secretKey.getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public Claims extractAllClaims(String token) throws ExpiredJwtException {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey(SECRET_KEY))
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public String getUsername(String token) {
        return extractAllClaims(token).get("username", String.class);
    }

    public Boolean isTokenExpired(String token) {
        final Date expiration = extractAllClaims(token).getExpiration();
        return expiration.before(new Date());
    }

    public String generateToken(UserEntity user) {
        return doGenerateToken(user, TOKEN_VALIDATION_SECOND);
    }

    public String generateRefreshToken(UserEntity user) {
        return doGenerateToken(user, REFRESH_TOKEN_VALIDATION_SECOND);
    }

    public String doGenerateToken(UserEntity user, long expireTime) {

        Claims claims = Jwts.claims();
        claims.put("id", user.getUserId());
        claims.put("username", user.getUsername());
        claims.put("email", user.getEmail());
        claims.put("nickname", user.getUsername());
        claims.put("label_name", user.getUsername());
        claims.put("role", user.getRole());

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expireTime))
                .signWith(getSigningKey(SECRET_KEY), SignatureAlgorithm.HS256)
                .compact();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = getUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    public JwtUserInfo getUserInfo(String token) {
        Claims body;
        if(token != null) {
            body = extractAllClaims(token);
        } else {
            throw new IllegalTokenException("토큰이 존재하지 않습니다.");
        }
        return JwtUserInfo.builder()
                .id(Long.parseLong(Integer.toString((int)body.get("id"))))
                .username((String)body.get("username"))
                .email((String)body.get("email"))
                .nickname((String)body.get("nickname"))
                .label_name((String)body.get("label_name"))
                .role(Admin.valueOf((String)body.get("role")))
                .build();
    }
}