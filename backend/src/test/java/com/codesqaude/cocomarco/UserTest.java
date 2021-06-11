package com.codesqaude.cocomarco;

import com.codesqaude.cocomarco.domain.user.User;
import com.codesqaude.cocomarco.service.CommentService;
import com.codesqaude.cocomarco.service.IssueService;
import com.codesqaude.cocomarco.service.UserService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.UUID;

@SpringBootTest
class UserTest {

    @Autowired
    CommentService commentService;

    @Autowired
    IssueService issueService;

    @Autowired
    UserService userService;

    @Test
    @DisplayName("유저 세이브 검증")
    void UserSave() {

        UUID join = userService.join("ads", "ads");

        User byId = userService.findById(join);

        System.out.println(byId);
    }

    @Test
    @DisplayName("같은 유저 검증")
    void sameUser() {

        UUID join = userService.join("ads", "ads");

        User byId = userService.findById(join);

        byId.sameUser(join);
    }

}
