package com.switchfully.youcoach.service.dto;

public class UserDto {
    private String username;
    private String firstName;
    private String lastName;

    public UserDto(String username, String firstName, String lastName) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
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
}
