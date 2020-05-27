package com.switchfully.youcoach.service.dto.coachingSession;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;
import java.util.UUID;

public class CreateCoachingSessionDto {

    private UUID id;

    private String subject;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date date;


    private String time;

    private String location;

    private String remarks;

    public CreateCoachingSessionDto() {
    }

    public CreateCoachingSessionDto(String subject, Date date, String localTime, String location, String remarks) {
        this.subject = subject;
        this.date = date;
        this.time = localTime;
        this.location = location;
        this.remarks = remarks;
    }

    public String getSubject() {
        return subject;
    }

    public Date getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }

    public String getLocation() {
        return location;
    }

    public String getRemarks() {
        return remarks;
    }

}
