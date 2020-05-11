package com.switchfully.youcoach.domain.exceptions;

public class UsernameAlreadyRegisteredException extends RuntimeException {
    public UsernameAlreadyRegisteredException(String email) {
        super("The provided email: " + email + " is already used");
    }
}
