package com.switchfully.youcoach.service.dto;

public class UserDto {
    private String username;
    private String firstName;
    private String lastName;
    private String pictureUrl;

    public UserDto(String username, String firstName, String lastName, String pictureUrl) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pictureUrl = pictureUrl;
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
}
