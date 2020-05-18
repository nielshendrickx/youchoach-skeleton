package com.switchfully.youcoach.domain.user;

import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface UsersRepository extends CrudRepository<Users, UUID> {
    Users findBySecuredUser_Id (UUID id);
}
