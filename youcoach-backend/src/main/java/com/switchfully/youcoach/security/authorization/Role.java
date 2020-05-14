package com.switchfully.youcoach.security.authorization;

public enum Role {
    STUDENT("student"),
    COACH("coach"),
    ADMINISTRATOR("administrator");


    private String label;

    Role(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
