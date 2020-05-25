package com.switchfully.youcoach.api.endpoints;

import com.switchfully.youcoach.service.dto.UserDto;
import com.switchfully.youcoach.service.services.CoachService;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping(path = CoachController.COACH_RESOURCE_PATH)
public class CoachController {
    public static final String COACH_RESOURCE_PATH = "/coach";
    private final Logger loggerUsers = LoggerFactory.getLogger(CoachController.class);
    private CoachService coachService;

    @Autowired
    public CoachController(CoachService coachService) {
        this.coachService = coachService;
    }


    @GetMapping(produces = "application/json")
    @ApiOperation(value = "Get list of coaches", notes = "A list of all the coaches", response = UserDto.class)
    @ResponseStatus(HttpStatus.OK)
    public Collection<UserDto> giveListAllCoach(){
        loggerUsers.info("Returned list of all coaches");
        return coachService.getAllCoach();
    }

}
