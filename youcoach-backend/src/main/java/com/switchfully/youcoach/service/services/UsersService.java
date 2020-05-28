package com.switchfully.youcoach.service.services;

import com.switchfully.youcoach.domain.exceptions.UserNotFoundException;
import com.switchfully.youcoach.domain.exceptions.UsernameAlreadyRegisteredException;
import com.switchfully.youcoach.domain.user.Users;
import com.switchfully.youcoach.domain.user.UsersRepository;
import com.switchfully.youcoach.security.authentication.user.SecuredUser;
import com.switchfully.youcoach.security.authentication.user.SecuredUserRepository;
import com.switchfully.youcoach.security.authorization.Role;
import com.switchfully.youcoach.service.dto.CreateUserDto;
import com.switchfully.youcoach.service.dto.UpdateUserDto;
import com.switchfully.youcoach.service.dto.UserDto;
import com.switchfully.youcoach.service.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.Collection;
import java.util.UUID;

import static com.switchfully.youcoach.service.validation.Validation.*;

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
        validateNewMember(newUser);
        SecuredUser securedUser = securedUserRepository.save(new SecuredUser(newUser.getUsername(), passwordEncoder.encode(newUser.getPassword())));
        Users user = usersRepository.save(new Users(securedUser, newUser.getFirstName(), newUser.getLastName(), newUser.getPictureUrl()));
        return userMapper.toDto(user);
    }

    public void isUsernameAvailable(String email) throws UsernameAlreadyRegisteredException {
        if (securedUserRepository.findByUsername(email) != null) {
            throw new UsernameAlreadyRegisteredException(email);
        }
    }

    public UserDto updateUser(UpdateUserDto updateUserDto) {
        validateUpdateMember(updateUserDto);
        Users user = usersRepository.findBySecuredUser_Id(updateUserDto.getUserId());
        if (user == null) {
            throw new UserNotFoundException();
        }
        user.setFirstName(updateUserDto.getFirstName());
        user.setLastName(updateUserDto.getLastName());
        user.setPictureUrl(updateUserDto.getPictureUrl());
        user.getSecuredUser().setUsername(updateUserDto.getUsername());
        user.getSecuredUser().setRole(updateUserDto.getRole());
        user.setIntroduction(updateUserDto.getIntroduction());
        user.setAvailability(updateUserDto.getAvailability());
        user.setTopics(updateUserDto.getTopics());
        return userMapper.toDto(user);
    }

    private void validateNewMember(CreateUserDto newUser) {
        isValidEmailAddress(newUser.getUsername());
        isUsernameAvailable(newUser.getUsername());
        isValidPassword(newUser.getPassword());
        isPasswordMatch(newUser.getPassword(), newUser.getPasswordAgain());
    }

    private void validateUpdateMember(UpdateUserDto updateUserDto) {
        isValidEmailAddress(updateUserDto.getUsername());
        if (userHasNewUserName(updateUserDto)) {
            isUsernameAvailable(updateUserDto.getUsername());
        }
    }

    private boolean userHasNewUserName(UpdateUserDto updateUserDto) {
        Users user = usersRepository.findBySecuredUser_Id(updateUserDto.getUserId());
        return !updateUserDto.getUsername().equals(user.getSecuredUser().getUsername());
    }

    public Collection<Role> getRoles(){
        return Arrays.asList(Role.values());
    }
}
