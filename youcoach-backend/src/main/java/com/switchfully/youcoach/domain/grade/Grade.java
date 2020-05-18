package com.switchfully.youcoach.domain.grade;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "grade")
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @Column(name = "year")
    private int year;

    public Grade(int year) {
        this.year = year;
    }

    public Grade() {
    }

    public UUID getId() {
        return id;
    }

    public int getName() {
        return year;
    }
}
