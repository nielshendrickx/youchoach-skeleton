package com.switchfully.youcoach.domain.exceptions;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class AuthenticationFailedExceptionTest {

    @Test
    void whenExceptionIsThrown_ThenMessageIsCorrect() {
        assertThat(new AuthenticationFailedException().getMessage()).isEqualTo("Your password or username isn't correct.");
    }
}
