package com.switchfully.youcoach.security.authentication.user;

import com.switchfully.youcoach.domain.user.Users;
import org.assertj.core.api.Assertions;
import org.assertj.core.util.Lists;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

class SecuredUserRepositoryFromJsonTest {

    @Test
    void name() {
        SecuredUserRepositoryFromJson securedUserRepositoryFromJson = new SecuredUserRepositoryFromJson(Lists.newArrayList(new SecuredUser("username", "password")));

        SecuredUser securedUser = securedUserRepositoryFromJson.findByUsername("username");

        Assertions.assertThat(securedUser.getPassword()).isEqualTo("password");
    }
}
