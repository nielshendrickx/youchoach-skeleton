package com.switchfully.youcoach.api.endpoints;

import com.switchfully.youcoach.service.dto.UserDto;
import com.switchfully.youcoach.service.services.CoachService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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



/*Why does the method below gives a null in JWTAuthorization filter line 54 but works in another controller?
    Also works if i simply return a string here, not if i return string in coachservice*/

/*    @GetMapping(produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public Collection<UserDto> giveListAllCoach(){
        return coachService.getAllCoach();
    }*/

}
