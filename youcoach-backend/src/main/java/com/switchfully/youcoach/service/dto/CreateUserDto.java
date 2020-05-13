package com.switchfully.youcoach.service.dto;

public class CreateUserDto {
    private String username;
    private String password;
    private String passwordAgain;
    private String firstName;
    private String lastName;
    private String pictureUrl;

    public CreateUserDto(String username, String password, String firstName, String lastName, String passwordAgain, String pictureUrl) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.passwordAgain = passwordAgain;
        this.pictureUrl = pictureUrl;
    }

    public CreateUserDto() {
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPasswordAgain() {
        return passwordAgain;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }
}
