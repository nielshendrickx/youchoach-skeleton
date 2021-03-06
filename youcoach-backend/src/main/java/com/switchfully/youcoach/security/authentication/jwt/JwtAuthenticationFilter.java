package com.switchfully.youcoach.security.authentication.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.switchfully.youcoach.security.authentication.user.SecuredUser;
import com.switchfully.youcoach.security.authentication.user.SecuredUserService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private SecuredUserService securedUserService;
    private TokenService tokenService;

    private final AuthenticationManager authenticationManager;
    private final String jwtSecret;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, String jwtSecret, SecuredUserService securedUserService, TokenService tokenService) {
        this.authenticationManager = authenticationManager;
        this.jwtSecret = jwtSecret;
        this.securedUserService = securedUserService;
        this.tokenService = tokenService;

        setFilterProcessesUrl("/login");
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
        SecuredUser securedUser = getSecuredUser(request);

        return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(securedUser.getUsername(), securedUser.getPassword()));
    }

    private SecuredUser getSecuredUser(HttpServletRequest request) {
        try {
            return new ObjectMapper().readValue(request.getInputStream(), SecuredUser.class);
        } catch (IOException e) {
            throw new RuntimeException("Could not read body from request", e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain filterChain, Authentication authentication) {

        var token = tokenService.generateToken(jwtSecret,securedUserService.getUserByUsername(authentication.getName()).getId().toString(),authentication.getAuthorities());

        response.addHeader("Authorization", "Bearer " + token);
        response.addHeader("Access-Control-Expose-Headers", "Authorization");
    }
}
