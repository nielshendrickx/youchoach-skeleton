package com.switchfully.youcoach.security;

import com.switchfully.youcoach.security.authentication.jwt.JwtAuthenticationFilter;
import com.switchfully.youcoach.security.authentication.jwt.JwtAuthorizationFilter;
import com.switchfully.youcoach.security.authentication.jwt.JwtRegistrationFilter;
import com.switchfully.youcoach.security.authentication.jwt.TokenService;
import com.switchfully.youcoach.security.authentication.user.SecuredUserService;
import com.switchfully.youcoach.security.authorization.RoleToFeatureMapper;
import com.switchfully.youcoach.service.services.UsersService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final PasswordEncoder passwordEncoder;
    private String jwtSecret;
    private RoleToFeatureMapper roleToFeatureMapper;
    private SecuredUserService securedUserService;
    private UsersService usersService;
    private TokenService tokenService;

    public SecurityConfig(SecuredUserService securedUserService, UsersService usersService, PasswordEncoder passwordEncoder, @Value("${jwt.secret}") String jwtSecret, RoleToFeatureMapper roleToFeatureMapper, TokenService tokenService) {
        this.securedUserService = securedUserService;
        this.usersService = usersService;
        this.passwordEncoder = passwordEncoder;
        this.jwtSecret = jwtSecret;
        this.roleToFeatureMapper = roleToFeatureMapper;
        this.tokenService = tokenService;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable().authorizeRequests()
                .antMatchers( "/swagger-ui.html/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilter(new JwtAuthenticationFilter(authenticationManager(), jwtSecret, securedUserService, tokenService))
                .addFilter(new JwtRegistrationFilter(authenticationManager(), jwtSecret, securedUserService, usersService, tokenService))
                .addFilter(new JwtAuthorizationFilter(authenticationManager(), jwtSecret, roleToFeatureMapper))
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(securedUserService).passwordEncoder(passwordEncoder);
    }

}
