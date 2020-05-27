package com.switchfully.youcoach.service.services;

import com.switchfully.youcoach.domain.sessions.CoachingSessionRepository;
import com.switchfully.youcoach.service.dto.coachingSession.CreateCoachingSessionDto;
import com.switchfully.youcoach.service.mappers.SessionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SessionService {
    private CoachingSessionRepository coachingSessionRepository;
    private SessionMapper sessionMapper;

    @Autowired
    public SessionService(CoachingSessionRepository coachingSessionRepository, SessionMapper sessionMapper) {
        this.coachingSessionRepository = coachingSessionRepository;
        this.sessionMapper = sessionMapper;
    }

    public void createNewSession (CreateCoachingSessionDto createCoachingSessionDto){
        coachingSessionRepository.save(sessionMapper.toSession(createCoachingSessionDto));
    }


}
