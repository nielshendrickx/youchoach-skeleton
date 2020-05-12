package com.switchfully.youcoach.domain.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<Users, Long> {
    @Query ("select s.securedUser from Users s where s.securedUser.username = ?1")
    Users findBySecuredUser_Username (String username);
}
