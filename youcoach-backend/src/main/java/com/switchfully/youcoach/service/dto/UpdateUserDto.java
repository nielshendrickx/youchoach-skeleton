package com.switchfully.youcoach.service.dto;

import com.switchfully.youcoach.domain.topic.Topic;
import com.switchfully.youcoach.security.authorization.Role;

import java.util.List;
import java.util.UUID;

public class UpdateUserDto {
    private UUID userId;
    private String username;
    private String firstName;
    private String lastName;
    private Role role;
    private String pictureUrl;
    private String introduction;
    private String availability;
    private List<Topic> topics;

    public UpdateUserDto(UUID userId, String username, String firstName, String lastName, Role role, String pictureUrl, String introduction, String availability, List<Topic> topics) {
        this.userId = userId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.pictureUrl = pictureUrl;
        this.introduction = introduction;
        this.availability = availability;
        this.topics = topics;
    }

    public UpdateUserDto(){}

    public UUID getUserId() {
        return userId;
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

    public Role getRole() {
        return role;
    }

    public String getPictureUrl() {
        return pictureUrl;
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

    @Override
    public String toString() {
        return "UpdateUserDto{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", role=" + role +
                ", pictureUrl='" + pictureUrl + '\'' +
                ", introduction='" + introduction + '\'' +
                ", availability='" + availability + '\'' +
                ", topics='" + topics + '\'' +
                '}';
    }
}
