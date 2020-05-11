package com.switchfully.youcoach.api.endpoints;

import com.switchfully.youcoach.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = UserController.USER_RESOURCE_PATH)
public class UserController {
    public static final String USER_RESOURCE_PATH="/user";
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
}
