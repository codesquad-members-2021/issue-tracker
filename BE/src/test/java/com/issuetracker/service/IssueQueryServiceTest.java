package com.issuetracker.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class IssueQueryServiceTest extends BaseServiceTest {

    @Test
    @DisplayName("이슈 상세 페이지 조회")
    void getDetailPage() throws Exception {
        int issueId = 1;
        String url = "http://localhost:" + port + "/api/issues/" + issueId;
        mockMvc.perform(get(url)
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
