package com.switchfully.youcoach.service.mappers;

import com.switchfully.youcoach.domain.sessions.CoachingSession;
import com.switchfully.youcoach.service.dto.coachingSession.CreateCoachingSessionDto;
import org.springframework.stereotype.Component;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

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

    public CoachingSession toSession(CreateCoachingSessionDto createCoachingSessionDto) {
        LocalTime time = LocalTime.parse(createCoachingSessionDto.getTime(), DateTimeFormatter.ofPattern("HH:mm"));
        return new CoachingSession(
                createCoachingSessionDto.getSubject(),
                createCoachingSessionDto.getDate(),
                time,
                createCoachingSessionDto.getLocation(),
                createCoachingSessionDto.getRemarks());

    }

}
