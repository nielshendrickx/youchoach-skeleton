package com.switchfully.youcoach.domain.exceptions;

public class AuthenticationFailedException extends RuntimeException {
    public AuthenticationFailedException() {
        super("Your password or username isn't correct.");
    }
}
