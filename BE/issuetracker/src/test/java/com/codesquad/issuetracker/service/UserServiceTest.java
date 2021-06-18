package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.User;
import com.codesquad.issuetracker.dto.UserInfo;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
@TestPropertySource("classpath:application-test.properties")
@Transactional
class UserServiceTest {

    private UserService userService;

    @Autowired
    public UserServiceTest(UserService userService) {
        this.userService = userService;
    }

    @Test
    @DisplayName("jwt 발행")
    void getJwtTokenTest() {
        User user = mock(User.class);

        when(user.getId()).thenReturn(1L);
        when(user.getEmail()).thenReturn("sally@gmail.com");

        String jsonWebToken = userService.getJsonWebToken(user);
        System.out.println(jsonWebToken);

        User userFromToken = userService.getUserFromToken(jsonWebToken);

        assertThat(userFromToken.getEmail()).isEqualTo(user.getEmail());
    }
}
