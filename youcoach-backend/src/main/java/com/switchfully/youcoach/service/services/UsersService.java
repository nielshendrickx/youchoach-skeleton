package com.switchfully.youcoach.service.services;

import com.switchfully.youcoach.domain.exceptions.UsernameAlreadyRegisteredException;
import com.switchfully.youcoach.domain.user.Users;
import com.switchfully.youcoach.domain.user.UsersRepository;
import com.switchfully.youcoach.security.authentication.user.SecuredUser;
import com.switchfully.youcoach.security.authentication.user.SecuredUserRepository;
import com.switchfully.youcoach.service.dto.CreateUserDto;
import com.switchfully.youcoach.service.dto.UserDto;
import com.switchfully.youcoach.service.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@Transactional
public class UsersService {
    private final UsersRepository usersRepository;
    private final SecuredUserRepository securedUserRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UsersService(UsersRepository usersRepository, SecuredUserRepository securedUserRepository, UserMapper userMapper, PasswordEncoder passwordEncoder) {
        this.usersRepository = usersRepository;
        this.securedUserRepository = securedUserRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }

    public UserDto getUserById(UUID id) {
        return userMapper.toDto(usersRepository.findBySecuredUser_Id(id));
    }

    public UserDto register(CreateUserDto newUser) {
        SecuredUser securedUser = securedUserRepository.save(new SecuredUser(newUser.getUsername(), passwordEncoder.encode(newUser.getPassword())));
        Users user = usersRepository.save(new Users(securedUser,newUser.getFirstName(), newUser.getLastName()));
        return userMapper.toDto(user);
    }

    public void isUsernameAvailable(String email) throws UsernameAlreadyRegisteredException {
        if (securedUserRepository.findByUsername(email) != null) {
            throw new UsernameAlreadyRegisteredException(email);
        }
    }
}
