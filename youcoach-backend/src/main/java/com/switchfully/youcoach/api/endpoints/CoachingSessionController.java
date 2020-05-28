package com.switchfully.youcoach.api.endpoints;

import com.switchfully.youcoach.service.dto.coachingSession.CreateCoachingSessionDto;
import com.switchfully.youcoach.service.services.SessionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping(path = CoachingSessionController.SESSION_RESOURCE_PATH)
public class CoachingSessionController {
    public static final String SESSION_RESOURCE_PATH = "/request-session";
    private final Logger loggerUsers = LoggerFactory.getLogger(CoachingSessionController.class);
    private final SessionService sessionService;


    @Autowired
    public CoachingSessionController(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public void requestSession(@RequestBody CreateCoachingSessionDto createCoachingSessionDto, Principal principal) {
        loggerUsers.info("Requested a session");
        sessionService.createNewSession(createCoachingSessionDto,principal);
    }

}
