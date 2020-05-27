package com.switchfully.youcoach.api.endpoints;

import com.switchfully.youcoach.domain.exceptions.UserNotFoundException;
import com.switchfully.youcoach.security.authorization.Role;
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

import java.security.Principal;
import java.util.Collection;
import java.util.UUID;

@RestController
@RequestMapping(path = CoachController.COACH_RESOURCE_PATH)
public class CoachController {
    public static final String COACH_RESOURCE_PATH = "/coach";
    private final Logger loggerUsers = LoggerFactory.getLogger(CoachController.class);
    private CoachService coachService;
    private UsersService usersService;

    @Autowired
    public CoachController(CoachService coachService, UsersService usersService) {
        this.coachService = coachService;
        this.usersService = usersService;
    }

    @PreAuthorize("hasAuthority('viewcoach')")
    @GetMapping(produces = "application/json", path = "/{id}")
    @ApiOperation(value = "Get a coach by username", notes = "A coach will be returned", response = UserDto.class)
    @ResponseStatus(HttpStatus.OK)
    public UserDto getUserById(@PathVariable UUID id) {
        loggerUsers.info("Returning a coach");
        UserDto coach = usersService.getUserById(id);
        if(coach.getRole() != Role.COACH) {
            throw new UserNotFoundException();
        }
        return coach;
    }

    @GetMapping(produces = "application/json")
    @ApiOperation(value = "Get list of coaches", notes = "A list of all the coaches", response = UserDto.class)
    @ResponseStatus(HttpStatus.OK)
    public Collection<UserDto> giveListAllCoach(Principal principal){
        loggerUsers.info("Returned list of all coaches");
        String coachUsername = usersService.getUserById(UUID.fromString(principal.getName())).getUsername();
        Collection<UserDto> coaches = coachService.getAllCoach();
        coaches.removeIf(coach  -> coach.getUsername().equals(coachUsername));
        return coaches;
    }
}
