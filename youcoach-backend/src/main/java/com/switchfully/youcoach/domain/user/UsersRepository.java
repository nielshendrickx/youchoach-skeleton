package com.switchfully.youcoach.domain.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;
import java.util.UUID;

public interface UsersRepository extends CrudRepository<Users, UUID> {
    Users findBySecuredUser_Id (UUID id);

    @Query("from Users u join SecuredUser s on s.id = u.securedUser where s.role = 'COACH'")
    Collection <Users> findAllCoaches ();
}
