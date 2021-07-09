package com.issuetracker.service;

import com.google.gson.*;
import com.issuetracker.domain.issue.IssueRepository;
import com.issuetracker.web.dto.response.IssueDetailPageResponseDTO;
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
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class IssueQueryServiceTest {

    @LocalServerPort
    private int port;

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
    @DisplayName("이슈 상세 페이지 조회")
    void getDetailPage() throws Exception {
        int issueId = 1;
        String url = "http://localhost:" + port + "/api/issues/" + issueId;
        MvcResult result = mockMvc.perform(get(url)
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcImlzc3VlLXRyYWNrZXItdGVhbS0wNlwiIiwidXNlcklkIjoxfQ.WCMSnjyZCjZ80aSBN9GCNckS8Q_FkdpWXPWJwsx3kVA"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("이슈 1번"))
                .andExpect(jsonPath("$.owner.name").value("Jeong InHo"))
                .andExpect(jsonPath("$.comments[0].comment").value("이슈 1번 내용"))
                .andExpect(jsonPath("$.assignees[1].userName").value("janeljs"))
                .andExpect(jsonPath("$.labels[1].name").value("feature"))
                .andExpect(jsonPath("$.milestone.title").value("M1"));
    }
}
