package com.switchfully.youcoach.security.authentication.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TokenService {
    private static final int TOKEN_TIME_TO_LIVE = 3600000;

    public String generateToken(String jwtSecret, String userId, Object authorities ) {
        return Jwts.builder()
                .signWith(Keys.hmacShaKeyFor(jwtSecret.getBytes()), SignatureAlgorithm.HS512)
                .setHeaderParam("typ", "JWT")
                .setIssuer("secure-api")
                .setAudience("secure-app")
                .setSubject(userId)
                .setExpiration(new Date(new Date().getTime() + TOKEN_TIME_TO_LIVE))
                .claim("roles", authorities)
                .compact();
    }
}
