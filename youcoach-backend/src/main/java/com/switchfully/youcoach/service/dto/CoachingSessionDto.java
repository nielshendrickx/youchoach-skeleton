package com.switchfully.youcoach.service.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.UUID;

public class CoachingSessionDto {

    private UUID id;

    private String subject;

  @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private Date date;

    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="HH:mm:ss")
    private LocalDate time;

    private String location;

    private String remarks;

    public CoachingSessionDto() {
    }

    public CoachingSessionDto(String subject, Date date, LocalDate localTime, String location, String remarks) {
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

    public LocalDate getTime() {
        return time;
    }

    public String getLocation() {
        return location;
    }

    public String getRemarks() {
        return remarks;
    }

}
