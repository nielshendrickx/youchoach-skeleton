package com.switchfully.youcoach.service.mappers;

import com.switchfully.youcoach.domain.sessions.CoachingSession;
import com.switchfully.youcoach.service.dto.CoachingSessionDto;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

@Component
public class SessionMapper {

 /*   public CoachingSessionDto toDto(CoachingSession coachingSession){
        return new CoachingSessionDto(
                coachingSession.getSubject(),
                coachingSession.getDate(),
     *//*           coachingSession.getTime(),*//*
                coachingSession.getLocation(),
                coachingSession.getRemarks());
    }*/

    public CoachingSession toSession(CoachingSessionDto coachingSessionDto){
        return new CoachingSession(
                coachingSessionDto.getSubject(),
                coachingSessionDto.getDate(),
                coachingSessionDto.getTime(),
                coachingSessionDto.getLocation(),
                coachingSessionDto.getRemarks());
    }

}
