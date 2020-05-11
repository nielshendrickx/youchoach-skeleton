package com.switchfully.youcoach.security.authentication.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecuredUserConfig {

    private SecuredUserRepository securedUserRepository;
    /*private PasswordEncoder passwordEncoder;

    public SecuredUserConfig(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }*/

    @Autowired
    public SecuredUserConfig(SecuredUserRepository securedUserRepository) {
        this.securedUserRepository = securedUserRepository;
    }

    /*    @Bean
    SecuredUserRepository securedUserRepository() {
        return new SecuredUserRepositoryFromJson(loadUsers());
    }*/

/*    private List<SecuredUser> loadUsers() {
        return readSecuredUsersFile().stream()
                .peek(loadedUser -> loadedUser.encryptPassword(passwordEncoder))
                .collect(Collectors.toList());
    }

    private List<SecuredUser> readSecuredUsersFile() {
        try {
            return Lists.newArrayList(new ObjectMapper().readValue(new ClassPathResource("secured-users.json").getFile(), SecuredUser[].class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }*/
}
