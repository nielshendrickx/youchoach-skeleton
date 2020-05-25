package com.switchfully.youcoach.api.endpoints;

import com.switchfully.youcoach.service.dto.UserDto;
import com.switchfully.youcoach.service.services.CoachService;
import com.switchfully.youcoach.service.services.UsersService;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

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
