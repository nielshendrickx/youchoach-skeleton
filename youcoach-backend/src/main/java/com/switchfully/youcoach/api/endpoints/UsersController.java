package com.switchfully.youcoach.api.endpoints;

import com.switchfully.youcoach.service.dto.CreateUserDto;
import com.switchfully.youcoach.service.dto.UserDto;
import com.switchfully.youcoach.service.services.UsersService;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

import static com.switchfully.youcoach.api.validation.Validation.isValidEmailAddress;
import static com.switchfully.youcoach.api.validation.Validation.isValidPassword;

@RestController
@RequestMapping(path = UsersController.USERS_RESOURCE_PATH)
public class UsersController {
    public static final String USERS_RESOURCE_PATH = "/users";
    private final Logger loggerUsers = LoggerFactory.getLogger(UsersController.class);
    private final UsersService usersService;

    @Autowired
    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @GetMapping(produces = "application/json", path = "/{id}")
    @ApiOperation(value = "Get a user by username", notes = "A user will be returned", response = UserDto.class)
    @ResponseStatus(HttpStatus.OK)
    public UserDto getUserByUsername(@PathVariable UUID id) {
        loggerUsers.info("Returning a user");
        return usersService.getUserById(id);
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    @ApiOperation(value = "Register as a user", notes = "Everyone can freely join YouCoach!" , response = CreateUserDto.class)
    @ResponseStatus(HttpStatus.CREATED)
    public UserDto register(@RequestBody CreateUserDto newUser) {
        validateNewMember(newUser);
        loggerUsers.info("Creating a new user");
        return usersService.register(newUser);
    }

    private void validateNewMember(CreateUserDto newUser) {
        isValidEmailAddress(newUser.getUsername());
        isValidPassword(newUser.getPassword());
        usersService.isUsernameAvailable(newUser.getUsername());
    }
}
