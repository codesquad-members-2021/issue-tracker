package com.team11.issue.domain;

import com.team11.issue.dto.milestone.MilestoneRequestDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "milestone")
public class Milestone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private LocalDate deadLineDate;

    private String description;

    public static Milestone createMilestone(MilestoneRequestDTO milestoneRequestDTO) {
        return Milestone.builder()
                .title(milestoneRequestDTO.getTitle())
                .deadLineDate(milestoneRequestDTO.getDeadLineDate())
                .description(milestoneRequestDTO.getDescription())
                .build();
    }

    public void updateMilestone(MilestoneRequestDTO milestoneRequestDTO) {
        this.title = milestoneRequestDTO.getTitle();
        this.description = milestoneRequestDTO.getDescription();
        this.deadLineDate = milestoneRequestDTO.getDeadLineDate();
    }
}
