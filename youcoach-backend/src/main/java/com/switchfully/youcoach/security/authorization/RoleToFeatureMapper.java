package com.switchfully.youcoach.security.authorization;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static com.google.common.collect.Lists.newArrayList;
import static com.switchfully.youcoach.security.authorization.Feature.*;

@Component
public class RoleToFeatureMapper {

    public List<Feature> mapRoleToFeature(Role role) {
        switch (role) {
            case COACH:
                return newArrayList(ACCEPT_SESSION);
            case STUDENT:
                return newArrayList(REQUEST_SESSION);
            case ADMINISTRATOR:
                return newArrayList(UPDATE_USER);
        }
        return new ArrayList<>();
    }
}
