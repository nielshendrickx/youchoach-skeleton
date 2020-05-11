package com.switchfully.youcoach.domain.exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException() {
        super("Could not find the user.");
    }
}
