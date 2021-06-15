package com.issuetracker.issue;

import static com.issuetracker.issue.IssueTestData.*;
import static org.graalvm.compiler.options.OptionType.User;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import com.issuetracker.controller.IssueController;
import com.issuetracker.domain.Issue;
import com.issuetracker.dto.IssueDto;
import com.issuetracker.service.IssueService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(IssueController.class)
public class IssueControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IssueService issueService;

    @Test
    public void 이슈_전체조회() throws Exception {
        String expectedId = "$.[?(@.id == '%s')]";
        String expectedTitle = "$.[?(@.title == '%s')]";
        String expectedDescription = "$.[?(@.description == '%s')]";
        String expectedAvatarUrl = "$.[?(@.author_avatar_url == '%s')]";
        String expectedIssueNum = "$.[?(@.issue_number == '%s')]";
        String expectedCreatedTime = "$.[?(@.created_time == '%s')]";
        String expectedMilestoneTitle = "$.[?(@.milestone_title == '%s')]";

        List<IssueDto> issueDtos = new ArrayList<IssueDto>(){{
            add(new IssueDto(issue1,"https://avatars.githubusercontent.com/u/16694346?v=4", "API 구현 1단계"));
            add(new IssueDto(issue2, "https://avatars.githubusercontent.com/u/16694346?v=4", "API 구현 2단계"));
        }};

        when(issueService.getAllIssues(USER_MJ)).thenReturn(
                issueDtos
        );

        this.mockMvc.perform(get("/api/issues/")
                .requestAttr("user", USER_MJ))
                .andExpect(status().isOk())
                .andExpect(jsonPath(expectedId, issue1.getId()).exists())
                .andExpect(jsonPath(expectedTitle, issue1.getTitle()).exists())
                .andExpect(jsonPath(expectedDescription, issue1.getDescription()).exists())
                .andExpect(jsonPath(expectedAvatarUrl, "https://avatars.githubusercontent.com/u/16694346?v=4").exists())
                .andExpect(jsonPath(expectedIssueNum, issue1.getNumber()).exists())
                .andExpect(jsonPath(expectedCreatedTime, issue1.getCreatedTime()).exists())
                .andExpect(jsonPath(expectedMilestoneTitle, "API 구현 1단계").exists())
                .andExpect(jsonPath(expectedId, issue2.getId()).exists())
                .andExpect(jsonPath(expectedTitle, issue2.getTitle()).exists())
                .andExpect(jsonPath(expectedDescription, issue2.getDescription()).exists())
                .andExpect(jsonPath(expectedAvatarUrl, "https://avatars.githubusercontent.com/u/16694346?v=4").exists())
                .andExpect(jsonPath(expectedIssueNum, issue2.getNumber()).exists())
                .andExpect(jsonPath(expectedCreatedTime, issue2.getCreatedTime()).exists())
                .andExpect(jsonPath(expectedMilestoneTitle, "API 구현 2단계").exists());
    }
}
