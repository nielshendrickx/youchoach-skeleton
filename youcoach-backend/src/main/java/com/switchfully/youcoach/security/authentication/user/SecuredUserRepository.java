package com.switchfully.youcoach.security.authentication.user;

import org.springframework.data.repository.CrudRepository;

public interface SecuredUserRepository extends CrudRepository<SecuredUser, Long> {
    SecuredUser findByUsername(String username);
}
