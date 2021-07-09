package com.issuetracker.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.issuetracker.domain.issue.Issue;
import com.issuetracker.domain.issue.IssueRepository;
import com.issuetracker.exception.IssueNotFoundException;
import com.issuetracker.web.dto.reqeust.IssueRequestDTO;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SoftAssertionsExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class IssueCommandServiceTest {

    @LocalServerPort
    private int port;

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private WebApplicationContext context;

    @InjectSoftAssertions
    SoftAssertions softly;

    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders
                .webAppContextSetup(context)
                .build();
    }

    @Test
    @Transactional
    @DisplayName("이슈 생성")
    void createIssue() throws Exception {
        String title = "이슈 4번";
        String comment = "이슈 4번 내용";
        List<Long> assignees = new ArrayList<>(Arrays.asList(1L, 2L));
        List<Long> labels = new ArrayList<>(Arrays.asList(1L, 2L));
        IssueRequestDTO issueRequest = new IssueRequestDTO(title, comment, assignees, labels, 1L);

        String url = "http://localhost:" + port + "/api/issues/form";
        mockMvc.perform(post(url)
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcImlzc3VlLXRyYWNrZXItdGVhbS0wNlwiIiwidXNlcklkIjoxfQ.WCMSnjyZCjZ80aSBN9GCNckS8Q_FkdpWXPWJwsx3kVA")
                .content(new ObjectMapper().writeValueAsString(issueRequest)))
                .andExpect(status().isOk());

        Issue issue = issueRepository.findById(1L).get();
        softly.assertThat(issue.getTitle()).isEqualTo(title);
        softly.assertThat(issue.getFirstComment()).isEqualTo(comment);
    }
}
