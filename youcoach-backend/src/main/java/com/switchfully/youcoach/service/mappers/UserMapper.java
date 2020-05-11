package com.switchfully.youcoach.service.mappers;

import com.switchfully.youcoach.domain.user.Users;
import com.switchfully.youcoach.security.authentication.user.SecuredUser;
import com.switchfully.youcoach.service.dto.CreateUserDto;
import com.switchfully.youcoach.service.dto.UserDto;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.stream.Collectors;

@Component
public class UserMapper {

    public UserDto toDto(Users users) {
        return new UserDto(users.getSecuredUser().getUsername(), users.getFirstName(), users.getLastName());
    }

    public Users toUser(CreateUserDto createUserDto) {
        SecuredUser securedUser = new SecuredUser(createUserDto.getUsername(), createUserDto.getPassword()); //TODO CLEANUP
        return new Users(securedUser, createUserDto.getFirstName(), createUserDto.getLastName());
    }

    public Collection<UserDto> toDto (Collection <Users> usersCollection) {
        return  usersCollection.stream().map(this::toDto).collect(Collectors.toList());
    }


}