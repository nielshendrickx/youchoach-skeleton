package com.switchfully.youcoach.service.dto;

import com.switchfully.youcoach.domain.topic.Topic;
import com.switchfully.youcoach.security.authorization.Role;

import java.util.List;

public class UserDto {
    private String username;
    private String firstName;
    private String lastName;
    private String pictureUrl;
    private Role role;
    private String introduction;
    private String availability;
    private List<Topic> topics;

    public UserDto(String username, String firstName, String lastName, String pictureUrl, Role role, String introduction, String availability, List<Topic> topics) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pictureUrl = pictureUrl;
        this.role = role;
        this.introduction = introduction;
        this.availability = availability;
        this.topics = topics;
    }

    public String getUsername() {
        return username;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public Role getRole() {
        return role;
    }

    public String getIntroduction() {
        return introduction;
    }

    public String getAvailability() {
        return availability;
    }

    public List<Topic> getTopics() {
        return topics;
    }
}
