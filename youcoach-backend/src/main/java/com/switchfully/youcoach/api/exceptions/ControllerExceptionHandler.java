package com.switchfully.youcoach.api.exceptions;

import com.switchfully.youcoach.api.endpoints.UsersController;
import com.switchfully.youcoach.domain.exceptions.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@ControllerAdvice
public class ControllerExceptionHandler extends ResponseEntityExceptionHandler {

    private final Logger loggerUser = LoggerFactory.getLogger(UsersController.class);

    @ExceptionHandler(EmailNotValidException.class)
    protected void emailNotValidException(EmailNotValidException ex, HttpServletResponse response) throws IOException {
        loggerUser.error("Email is not valid!", ex);
        response.sendError(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
    }

    @ExceptionHandler(PasswordNotValidException.class)
    protected void passwordNotValidException(PasswordNotValidException ex, HttpServletResponse response) throws IOException {
        loggerUser.error("Password is not valid!", ex);
        response.sendError(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
    }

    @ExceptionHandler(UsernameAlreadyRegisteredException.class)
    protected void usernameAlreadyRegisteredException(UsernameAlreadyRegisteredException ex, HttpServletResponse response) throws IOException {
        loggerUser.error("User name already registered!", ex);
        response.sendError(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
    }

    @ExceptionHandler(AuthenticationFailedException.class)
    protected void authenticationFailedException(AuthenticationFailedException ex, HttpServletResponse response) throws IOException {
        loggerUser.error("Authentication failed!", ex);
        response.sendError(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
    }

    @ExceptionHandler(PasswordDoNotMatchException.class)
    protected void passwordDoNotMatchException(PasswordDoNotMatchException ex, HttpServletResponse response) throws IOException {
        loggerUser.error("Passwords do not match!", ex);
        response.sendError(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
    }

    @ExceptionHandler(UserNotFoundException.class)
    protected void userNotFoundException(UserNotFoundException ex, HttpServletResponse response) throws IOException {
        loggerUser.error("User not found!", ex);
        response.sendError(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
    }
}
