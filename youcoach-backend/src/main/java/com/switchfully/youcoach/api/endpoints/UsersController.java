package com.switchfully.youcoach.api.endpoints;

import com.switchfully.youcoach.service.dto.UpdateUserDto;
import com.switchfully.youcoach.service.dto.UserDto;
import com.switchfully.youcoach.service.services.UsersService;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

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

    @PutMapping(produces = "application/json")
    @ApiOperation(value = "Update a user", notes = "A user will be updated returned", response = UserDto.class)
    @ResponseStatus(HttpStatus.CREATED)
    public UserDto updateUser(@RequestBody UpdateUserDto updateUserDto){
        return usersService.updateUser(updateUserDto);
    }
}
