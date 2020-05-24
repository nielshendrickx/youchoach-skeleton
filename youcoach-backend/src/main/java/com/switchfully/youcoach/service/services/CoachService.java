package com.switchfully.youcoach.service.services;

import com.switchfully.youcoach.domain.user.UsersRepository;
import com.switchfully.youcoach.service.dto.UserDto;
import com.switchfully.youcoach.service.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
@Transactional
public class CoachService {

    private UsersRepository usersRepository;
    private UserMapper userMapper;

    @Autowired
    public CoachService(UsersRepository usersRepository, UserMapper userMapper) {
        this.usersRepository = usersRepository;
        this.userMapper = userMapper;
    }


    public Collection<UserDto> getAllCoach() {
        return userMapper.toDto(usersRepository.findAllCoaches());
    }

}
