package com.switchfully.youcoach.domain.exceptions;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class UserNotFoundExceptionTest {

    @Test
    void whenExceptionIsThrown_ThenMessageIsCorrect() {
        assertThat(new UserNotFoundException().getMessage()).isEqualTo("Could not find the user.");
    }
}
