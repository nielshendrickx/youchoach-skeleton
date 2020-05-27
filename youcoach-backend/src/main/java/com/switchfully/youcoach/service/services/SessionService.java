package com.switchfully.youcoach.service.services;

import com.switchfully.youcoach.domain.sessions.CoachingSession;
import com.switchfully.youcoach.domain.sessions.CoachingSessionRepository;
import com.switchfully.youcoach.domain.user.Users;
import com.switchfully.youcoach.domain.user.UsersRepository;
import com.switchfully.youcoach.service.dto.coachingSession.CreateCoachingSessionDto;
import com.switchfully.youcoach.service.mappers.SessionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;
import java.util.UUID;

@Service
@Transactional
public class SessionService {
    private CoachingSessionRepository coachingSessionRepository;
    private SessionMapper sessionMapper;
    private UsersRepository usersRepository;


    @Autowired
    public SessionService(CoachingSessionRepository coachingSessionRepository, SessionMapper sessionMapper, UsersRepository usersRepository) {
        this.coachingSessionRepository = coachingSessionRepository;
        this.sessionMapper = sessionMapper;
        this.usersRepository = usersRepository;
    }

    public void createNewSession(CreateCoachingSessionDto createCoachingSessionDto, Principal principal){
        CoachingSession newSession = coachingSessionRepository.save(sessionMapper.toSession(createCoachingSessionDto));
        addSessionToUser(principal, newSession);
    }

    private void addSessionToUser(Principal principal, CoachingSession newSession) {
        UUID coacheeSecuredID = UUID.fromString(principal.getName());
        Users coacheeWhoAsks = usersRepository.findBySecuredUser_Id(coacheeSecuredID);
        coacheeWhoAsks.getSessionsAsCoachee().add(newSession);
    }


}
