package com.switchfully.youcoach.service.services;

import com.switchfully.youcoach.domain.exceptions.UsernameAlreadyRegisteredException;
import com.switchfully.youcoach.domain.user.UsersRepository;
import com.switchfully.youcoach.security.authentication.user.SecuredUserRepository;
import com.switchfully.youcoach.service.dto.CreateUserDto;
import com.switchfully.youcoach.service.dto.UserDto;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
class UsersServiceTest {

    @Autowired
    private UsersService usersService;
    @Autowired
    private SecuredUserRepository securedUserRepository;
    @Autowired
    private UsersRepository usersRepository;

    private CreateUserDto createUserDto;

    @BeforeEach
    void setUp() {
        createUserDto = new CreateUserDto("test@gmail.com", "Password1", "first name", "last name", "Password1", "picture.be");
    }

    @Test
    void registerUser_givenCreateUserDto_thenUserDtoIsReturned() {
        // Given
        UserDto userDto = usersService.register(createUserDto);
        // Then
        assertThat(userDto.getFirstName()).isEqualTo(createUserDto.getFirstName());
        assertThat(userDto.getLastName()).isEqualTo(createUserDto.getLastName());
        assertThat(userDto.getUsername()).isEqualTo(createUserDto.getUsername());
    }

    @Test
    void isUsernameAvailable_givenUserNameThatAlreadyExists_thenThrowUsernameAlreadyRegisteredException() {
        // Given
        CreateUserDto createUserDto = new CreateUserDto("test@gmail.com", "Password1", "first name", "last name", "Password1", "picture.be");
        usersService.register(createUserDto);
        // When
        // Then
        assertThatThrownBy(()-> usersService.isUsernameAvailable(createUserDto.getUsername())).isInstanceOf(UsernameAlreadyRegisteredException.class);
    }

    @AfterEach
    void tearDown() {
        usersRepository.deleteAll();
        securedUserRepository.deleteAll();
    }
}
