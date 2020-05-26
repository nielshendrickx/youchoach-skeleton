package com.switchfully.youcoach.domain.user;

import com.switchfully.youcoach.domain.topic.Topic;
import com.switchfully.youcoach.security.authentication.user.SecuredUser;

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

    @Column(name = "pictureUrl")
    private String pictureUrl;

    @Column(name = "introduction")
    private String introduction;

    @Column(name = "availability")
    private String availability;

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name = "fk_user_id")
    private List<Topic> topics;


    public Users(SecuredUser securedUser, String firstName, String lastName, String pictureUrl) {
        this.securedUser = securedUser;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pictureUrl = "http://cology.be/profile-picture.jpg";
    }

    public Users(SecuredUser securedUser, String firstName, String lastName, String pictureUrl, String introduction, String availability, List<Topic> topics) {
        this.securedUser = securedUser;
        this.firstName = firstName;
        this.lastName = lastName;
        this.introduction = introduction;
        this.availability = availability;
        this.topics = topics;
        this.pictureUrl = "http://cology.be/profile-picture.jpg";
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

    public String getPictureUrl() {
        return pictureUrl;
    }

    public String getIntroduction() {
        return introduction;
    }

    public String getAvailability() {
        return availability;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public List<Topic> getTopics() {
        return topics;
    }

    public void setTopics(List<Topic> topics) {
        this.topics = topics;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

}
