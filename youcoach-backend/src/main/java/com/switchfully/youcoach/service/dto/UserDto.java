package com.switchfully.youcoach.service.dto;

import com.switchfully.youcoach.security.authorization.Role;

public class UserDto {
    private String username;
    private String firstName;
    private String lastName;
    private String pictureUrl;
    private Role role;

    public UserDto(String username, String firstName, String lastName, String pictureUrl, Role role) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pictureUrl = pictureUrl;
        this.role = role;
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
}
