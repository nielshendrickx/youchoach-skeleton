package com.switchfully.youcoach.security.authorization;

public enum Feature {
    REQUEST_SESSION("requestsession"),
    ACCEPT_SESSION("acceptsession"),
    VIEW_USER("viewuser"),
    VIEW_COACH("viewcoach"),
    UPDATE_USER("updateuser");

    private String label;

    Feature(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
