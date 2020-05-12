package com.switchfully.youcoach.api.validation;

import com.switchfully.youcoach.domain.exceptions.EmailNotValidException;
import com.switchfully.youcoach.domain.exceptions.PasswordNotValidException;
import org.springframework.stereotype.Component;

@Component
public class Validation {

    public static void isValidEmailAddress(String email){
        String ePattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
        java.util.regex.Pattern p = java.util.regex.Pattern.compile(ePattern);
        java.util.regex.Matcher m = p.matcher(email);
        if (!m.matches()) {
            throw new EmailNotValidException(email);
        }
    }

    public static void isValidPassword(String password){
        String ePattern = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}";
        java.util.regex.Pattern p = java.util.regex.Pattern.compile(ePattern);
        java.util.regex.Matcher m = p.matcher(password);
        if (!m.matches()) {
            throw new PasswordNotValidException();
        }
    }
}
