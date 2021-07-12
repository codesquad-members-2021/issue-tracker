package com.issuetracker.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class MilestoneServiceTest extends BaseServiceTest {

    @Autowired
    private milestoneRepository milestoneRepository

    @Test
    @Transactional
    @DisplayName("마일스톤 조회")
    void read() {
        String url = "http://localhost:" + port + "/api/milestones";
        mockMvc.perform(get(url)
                .param("status", "true")
                .contentType(MediaType.APPLICATION_JSON)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.labelsCount").value(3))
                .andExpect(jsonPath("$.openedMilestonesCount").value(3))
                .andExpect(jsonPath("$.closedMilestonesCount").value(0))
                .andExpect(jsonPath("$.milestones[0].id").value(1))
                .andExpect(jsonPath("$.milestones[0].title").value("M1"))
                .andExpect(jsonPath("$.milestones[0].open").value(true))
    }

    @Test
    @Transactional
    @DisplayName("마일스톤 생성")
    void create(String url = "http://localhost:" + port + "/api/milestones";
        String title = "M4";
        LocalDate dueDate = LocalDate.of(2022,05,18);
        String description = "마일스톤 기능 목록"
        MilestoneDTO milestoneDTO = MilestoneDTO.builder()
            .title(title)
            .description(dueDate)
            .dueDate(description)
            .build();

        mockMvc.perform(post(url)
            .contentType(MediaType.APPLICATION_JSON)
            .header("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcImlzc3VlLXRyYWNrZXItdGVhbS0wNlwiIiwidXNlcklkIjoxfQ.WCMSnjyZCjZ80aSBN9GCNckS8Q_FkdpWXPWJwsx3kVA"))
            .content(new ObjectMapper().writeValueAsString(milestoneDTO)))
            .andExpect(status().isOk())

        Milestone milestone = milestoneRepository.findById(4L);
        softly.assertThat(milestone.getTitle()).isEqualTo(title);
        softly.assertThat(milestone.getDueDate()).isEqualTo(dueDate);
        softly.assertThat(milestone.getDescription()).isEqualTo(description);
        softly.assertThat(milestone.isOpen()).isTrue();
    }
}
