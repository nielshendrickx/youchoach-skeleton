package com.switchfully.youcoach.domain.exceptions;

public class PasswordNotValidException extends RuntimeException {
    public PasswordNotValidException() {
        super("The provided password is not valid.");
    }
}
