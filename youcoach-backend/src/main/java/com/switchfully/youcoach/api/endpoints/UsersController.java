package com.switchfully.youcoach.api.endpoints;

import com.switchfully.youcoach.security.authorization.Role;
import com.switchfully.youcoach.service.dto.UpdateUserDto;
import com.switchfully.youcoach.service.dto.UserDto;
import com.switchfully.youcoach.service.services.CoachService;
import com.switchfully.youcoach.service.services.UsersService;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
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

    @PreAuthorize("#id.toString() == principal or hasAuthority('viewuser')")
    @GetMapping(produces = "application/json", path = "/{id}")
    @ApiOperation(value = "Get a user by username", notes = "A user will be returned", response = UserDto.class)
    @ResponseStatus(HttpStatus.OK)
    public UserDto getUserById(@PathVariable UUID id) {
        loggerUsers.info("Returning a user");
        return usersService.getUserById(id);
    }

    @PreAuthorize("#updateUserDto.userId.toString() == principal or hasAuthority('updateuser')")
    @PutMapping(produces = "application/json")
    @ApiOperation(value = "Update a user", notes = "A user will be updated returned", response = UserDto.class)
    @ResponseStatus(HttpStatus.CREATED)
    public UserDto updateUser(@RequestBody UpdateUserDto updateUserDto){
        loggerUsers.info("Updated a user");
        return usersService.updateUser(updateUserDto);
    }

    @GetMapping(produces = "application/json", path = "/roles")
    @ApiOperation(value = "Get roles of user", notes = "All the roles a user of the system can have", response = Role.class)
    @ResponseStatus(HttpStatus.OK)
    public Collection<Role> getRoles(){
        loggerUsers.info("Returned roles");
        return usersService.getRoles();
    }

}
