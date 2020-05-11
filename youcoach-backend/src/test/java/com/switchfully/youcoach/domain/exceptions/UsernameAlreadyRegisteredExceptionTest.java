package com.switchfully.youcoach.domain.exceptions;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class UsernameAlreadyRegisteredExceptionTest {

    @Test
    void whenExceptionIsThrown_ThenMessageIsCorrect() {
        String email = "test@gmail.com";

        assertThat(new UsernameAlreadyRegisteredException(email).getMessage()).isEqualTo("The provided email: " + email + " is already used");
    }
}
