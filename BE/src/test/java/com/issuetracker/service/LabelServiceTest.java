package com.issuetracker.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.issuetracker.domain.issue.Issue;
import com.issuetracker.domain.issue.IssueRepository;
import com.issuetracker.exception.IssueNotFoundException;
import com.issuetracker.web.dto.reqeust.IssueRequestDTO;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
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
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class LabelServiceTest extends BaseServiceTest {
    @Autowired
    private LabelRepository labelRepository;

    @Test
    @DisplayName("라벨 전체 조회")
    void read() {
        String url = "http://localhost:" + port + "/api/labels";
        mockMvc.perform(get(url))
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcImlzc3VlLXRyYWNrZXItdGVhbS0wNlwiIiwidXNlcklkIjoxfQ.WCMSnjyZCjZ80aSBN9GCNckS8Q_FkdpWXPWJwsx3kVA"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.labelsCount").value(3))
                .andExpect(jsonPath("$.milestonesCount").value(3))
                .andExpect(jsonPath("$.labels[0].id").value(1))
                .andExpect(jsonPath("$.labels[0].name").value("bug"))
                .andExpect(jsonPath("$.labels[0].color.backgroundColorCode").value("#F47378"))
                .andExpect(jsonPath("$.labels[0].color.textColorCode").value("#000000"))
                .andExpect(jsonPath("$.labels[0].description").value("bug fix"))
                .andExpect(jsonPath("$.labels[0].checked").value(false));
    }

    @Test
    @Transactional
    @DisplayName("라벨 생성")
    void create() {
        String name = "enhancement";
        String description = "기능 향상";
        Color color = new Color("#96F879", "#96F879");
        LabelDTO labelDTO = new LabelDTO(4L, name, color, description, false);
        String url = "http://localhost:" + port + "/api/labels";
        mockMvc.perform(post(url)
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcImlzc3VlLXRyYWNrZXItdGVhbS0wNlwiIiwidXNlcklkIjoxfQ.WCMSnjyZCjZ80aSBN9GCNckS8Q_FkdpWXPWJwsx3kVA")
                .content(new ObjectMapper().writeValueAsString(labelDTO)))
                .andExpect(status().isOk());

        Label label = labelRepository.findById(4L).orElseThrow(LabelNotFoundException::new);
        softly.assertThat(label.getName()).isEqualTo(name);
        softly.assertThat(label.getColor()).isEqualTo(color);
        softly.assertThat(label.getDescription()).isEqualTo(description);
    }
}
