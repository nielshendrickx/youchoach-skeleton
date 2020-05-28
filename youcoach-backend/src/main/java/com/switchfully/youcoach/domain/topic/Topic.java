package com.switchfully.youcoach.domain.topic;

import com.switchfully.youcoach.domain.grade.Grade;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;
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

    @OneToMany(cascade = {CascadeType.ALL})
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

    @Override
    public String toString() {
        return "Topic{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", grade=" + grade +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Topic topic = (Topic) o;
        return Objects.equals(id, topic.id) &&
                Objects.equals(name, topic.name) &&
                Objects.equals(grade, topic.grade);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, grade);
    }
}
