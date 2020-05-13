package com.switchfully.youcoach.domain.exceptions;

public class PasswordDoNotMatchException extends RuntimeException {
    public PasswordDoNotMatchException() {
        super("The provided passwords do not match.");
    }
}
