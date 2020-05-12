package com.switchfully.youcoach.domain.exceptions;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

class PasswordNotValidExceptionTest {

    @Test
    void whenExceptionIsThrown_ThenMessageIsCorrect() {
        Assertions.assertThat(new PasswordNotValidException().getMessage()).isEqualTo("The provided password is not valid.");
    }
}
