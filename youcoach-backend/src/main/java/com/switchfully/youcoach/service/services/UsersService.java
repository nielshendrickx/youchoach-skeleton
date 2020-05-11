package com.switchfully.youcoach.service.services;

import com.switchfully.youcoach.domain.exceptions.UsernameAlreadyRegisteredException;
import com.switchfully.youcoach.domain.user.UsersRepository;
import com.switchfully.youcoach.service.dto.CreateUserDto;
import com.switchfully.youcoach.service.dto.UserDto;
import com.switchfully.youcoach.service.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {
    private UsersRepository usersRepository;
    private UserMapper userMapper;

    @Autowired
    public UsersService(UsersRepository usersRepository, UserMapper userMapper) {
        this.usersRepository = usersRepository;
        this.userMapper = userMapper;
    }

    public UserDto register(CreateUserDto newUser) {
        return userMapper.toDto(usersRepository.save(userMapper.toUser(newUser)));
    }

    public void isUsernameAvailable(String email) throws UsernameAlreadyRegisteredException {
        if (usersRepository.findByUsername(email) != null) {
            throw new UsernameAlreadyRegisteredException(email);
        }
    }
}
