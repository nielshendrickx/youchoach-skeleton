package com.switchfully.youcoach.domain.sessions;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "coachingSession")
public class CoachingSession {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @Column(name = "subject")
    private String subject;


    @Column(name = "date")
    private Date date;

    @Column(name = "time")
    private LocalTime time;

    @Column(name = "location")
    private String location;

    @Column(name = "remarks")
    private String remarks;

    public CoachingSession() {
    }

    public CoachingSession(String subject, Date localDate, LocalTime localTime, String location, String remarks) {
        this.subject = subject;
        this.date = localDate;
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

    public LocalTime getTime() {
        return time;
    }

    public String getLocation() {
        return location;
    }

    public String getRemarks() {
        return remarks;
    }
}
