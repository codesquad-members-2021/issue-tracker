package com.codesqaude.cocomarco;

import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.service.CommentService;
import com.codesqaude.cocomarco.service.IssueService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class IssueTest {

    @Autowired
    CommentService commentService;

    @Autowired
    IssueService issueService;

    @Test
    @DisplayName("이슈 세이브 검증")
    void IssueSave() {
        Issue issue = Issue.createIssue(null, "타이틀", "내용", null, null, null);
        issueService.write(issue);

        Issue byId = issueService.findById(2L);
        System.out.println(byId);
    }

}
