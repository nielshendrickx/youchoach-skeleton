package com.switchfully.youcoach.domain.grade;

import javax.persistence.*;
import java.util.Objects;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Grade grade = (Grade) o;
        return year == grade.year &&
                Objects.equals(id, grade.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, year);
    }

    @Override
    public String toString() {
        return "Grade{" +
                "id=" + id +
                ", year=" + year +
                '}';
    }
}
