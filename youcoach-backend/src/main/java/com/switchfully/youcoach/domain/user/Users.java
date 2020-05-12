package com.switchfully.youcoach.domain.user;

import com.switchfully.youcoach.security.authentication.user.SecuredUser;
import com.switchfully.youcoach.security.authorization.Role;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    @OneToOne
    @JoinColumn(name = "fk_secured_user_id")
    private SecuredUser securedUser;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    public Users(SecuredUser securedUser, String firstName, String lastName) {
        this.securedUser = securedUser;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Users() {
    }

    public SecuredUser getSecuredUser() {
        return securedUser;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}
