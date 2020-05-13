package com.switchfully.youcoach.api.endpoints;

import com.switchfully.youcoach.domain.user.UsersRepository;
import com.switchfully.youcoach.security.authentication.user.SecuredUserRepository;
import com.switchfully.youcoach.service.dto.CreateUserDto;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;
import reactor.core.publisher.Mono;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UsersControllerTest {

    @Autowired
    private WebTestClient webTestClient;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private SecuredUserRepository securedUserRepository;

    @Test
    void register_givenCreateUserDto_thenResponseStatusIsCreated() {
        CreateUserDto createUserDto = new CreateUserDto("test@gmail.com", "Password1", "first name", "last name", "Password1", "picture.be");

        webTestClient.post()
                .uri(UsersController.USERS_RESOURCE_PATH)
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(createUserDto), CreateUserDto.class)
                .exchange()
                .expectStatus().isCreated();
    }

    @Test
    void register_givenWrongEmailFormatWithNoAt_thenResponseStatusIsBadRequest() {
        CreateUserDto createUserDto = new CreateUserDto("test@gmail.com", "Password1", "first name", "last name", "Password1", "picture.be");

        webTestClient.post()
                .uri(UsersController.USERS_RESOURCE_PATH)
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(createUserDto), CreateUserDto.class)
                .exchange()
                .expectStatus().isBadRequest();
    }

    @Test
    void register_givenWrongEmailFormatWithNoPoint_thenResponseStatusIsBadRequest() {
        CreateUserDto createUserDto = new CreateUserDto("test@gmail.com", "Password1", "first name", "last name", "Password1", "picture.be");
        webTestClient.post()
                .uri(UsersController.USERS_RESOURCE_PATH)
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(createUserDto), CreateUserDto.class)
                .exchange()
                .expectStatus().isBadRequest();
    }

    @Test
    void register_givenWrongPasswordFormatWithNoCapitalLetter_thenResponseStatusIsBadRequest() {
        CreateUserDto createUserDto = new CreateUserDto("test@gmail.com", "Password1", "first name", "last name", "Password1", "picture.be");
        webTestClient.post()
                .uri(UsersController.USERS_RESOURCE_PATH)
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(createUserDto), CreateUserDto.class)
                .exchange()
                .expectStatus().isBadRequest();
    }

    @Test
    void register_givenWrongPasswordFormatWithLengthUnderEight_thenResponseStatusIsBadRequest() {
        CreateUserDto createUserDto = new CreateUserDto("test@gmail.com", "Password1", "first name", "last name", "Password1", "picture.be");
        webTestClient.post()
                .uri(UsersController.USERS_RESOURCE_PATH)
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(createUserDto), CreateUserDto.class)
                .exchange()
                .expectStatus().isBadRequest();
    }

    @Test
    void register_givenWrongPasswordFormatWithNoNumber_thenResponseStatusIsBadRequest() {
        CreateUserDto createUserDto = new CreateUserDto("test@gmail.com", "Password1", "first name", "last name", "Password1", "picture.be");
        webTestClient.post()
                .uri(UsersController.USERS_RESOURCE_PATH)
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(createUserDto), CreateUserDto.class)
                .exchange()
                .expectStatus().isBadRequest();
    }

    @Test
    void register_givenEmailThatIsAlreadyRegistered_thenResponseStatusIsBadRequest() {
        CreateUserDto createUserDto = new CreateUserDto("test@gmail.com", "Password1", "first name", "last name", "Password1", "picture.be");
        webTestClient.post()
                .uri(UsersController.USERS_RESOURCE_PATH)
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(createUserDto), CreateUserDto.class)
                .exchange()
                .expectStatus().isCreated();

        webTestClient.post()
                .uri(UsersController.USERS_RESOURCE_PATH)
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(createUserDto), CreateUserDto.class)
                .exchange()
                .expectStatus().isBadRequest();
    }

    @AfterEach
    void tearDown() {
        usersRepository.deleteAll();
        securedUserRepository.deleteAll();
    }
}
