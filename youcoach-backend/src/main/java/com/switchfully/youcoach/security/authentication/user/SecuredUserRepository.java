package com.switchfully.youcoach.security.authentication.user;

import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface SecuredUserRepository extends CrudRepository<SecuredUser, UUID> {
    SecuredUser findByUsername(String username);
}
