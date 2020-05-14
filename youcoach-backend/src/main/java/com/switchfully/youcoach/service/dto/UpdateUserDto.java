package com.switchfully.youcoach.service.dto;

import com.switchfully.youcoach.security.authorization.Role;

import java.util.UUID;

public class UpdateUserDto {
    private UUID userId;
    private String username;
    private String firstName;
    private String lastName;
    private Role role;
    private String pictureUrl;

    public UpdateUserDto(UUID userId, String username, String firstName, String lastName, Role role, String pictureUrl) {
        this.userId = userId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.pictureUrl = pictureUrl;
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

    @Override
    public String toString() {
        return "UpdateUserDto{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", role=" + role +
                ", pictureUrl='" + pictureUrl + '\'' +
                '}';
    }
}
