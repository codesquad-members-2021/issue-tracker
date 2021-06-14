package com.codesqaude.cocomarco;

import com.codesqaude.cocomarco.domain.comment.Comment;
import com.codesqaude.cocomarco.domain.comment.dto.CommentRequest;
import com.codesqaude.cocomarco.domain.user.User;
import com.codesqaude.cocomarco.service.CommentService;
import com.codesqaude.cocomarco.service.IssueService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CommentTest {

    @Autowired
    CommentService commentService;

    @Autowired
    IssueService issueService;

    @Test
    @DisplayName("코멘트 세이브 검증")
    void commentSave() {
        CommentRequest sample = new CommentRequest("sample");
        commentService.create(1L, User.SAMPLE_UUID, sample);

        Comment byId = commentService.show(1L);

        System.out.println(byId.toString());

    }

}
