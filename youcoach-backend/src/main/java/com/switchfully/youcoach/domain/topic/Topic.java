package com.switchfully.youcoach.domain.topic;

import com.switchfully.youcoach.domain.grade.Grade;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "topic")
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @Column(name = "name")
    private String name;

    @OneToMany
    @JoinColumn(name = "fk_topic_id")
    private List<Grade> grade;

    public Topic(String name, List<Grade> grade) {
        this.name = name;
        this.grade = grade;
    }

    public Topic(){}

    public String getName() {
        return name;
    }

    public List<Grade> getGrade() {
        return grade;
    }
}
