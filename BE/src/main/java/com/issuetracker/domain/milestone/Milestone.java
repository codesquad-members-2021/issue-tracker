package com.issuetracker.domain.milestone;

import com.issuetracker.domain.BaseTimeEntity;
import com.issuetracker.domain.issue.Issue;
import com.issuetracker.web.dto.response.MilestoneDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Milestone extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private LocalDate dueDate;
    private boolean isOpen;

    @OneToMany(mappedBy = "milestone")
    private List<Issue> issues;

    public static Milestone create(MilestoneDTO milestoneDTO) {
        return Milestone.builder()
                .id(milestoneDTO.getId())
                .title(milestoneDTO.getTitle())
                .description(milestoneDTO.getDescription())
                .dueDate(milestoneDTO.getDueDate())
                .isOpen(true)
                .build();
    }

    public void update(MilestoneDTO milestoneDTO) {
        this.title = milestoneDTO.getTitle();
        this.dueDate = milestoneDTO.getDueDate();
        this.description = milestoneDTO.getDescription();
    }

    @PreRemove
    public void delete() {
        issues.forEach(Issue::deleteMilestone);
    }

    public Long countOpenedIssues() {
        return issues.stream()
                .filter(Issue::isOpen)
                .count();
    }

    public Long countClosedIssues() {
        return issues.stream()
                .filter(Issue::isClosed)
                .count();
    }
}
