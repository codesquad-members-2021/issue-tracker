package com.jane_eno.issue_tracker.domain.milestone;

import com.jane_eno.issue_tracker.domain.issue.Issue;
import lombok.*;
import com.jane_eno.issue_tracker.web.dto.response.MilestoneDTO;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Milestone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private LocalDate dueDate;
    private LocalDateTime createdDateTime;

    @OneToMany(mappedBy = "milestone")
    private List<Issue> issues;

    public static Milestone createMilestone(MilestoneDTO milestoneDTO) {
        return Milestone.builder()
                .title(milestoneDTO.getTitle())
                .description(milestoneDTO.getDescription())
                .dueDate(milestoneDTO.getDueDate())
                .createdDateTime(LocalDateTime.now())
                .build();
    }

    public Long countOpenedIssues() {
        return issues.stream().filter(Issue::isOpen).count();
    }

    public Long countClosedIssues() {
        return issues.stream().filter(i->!i.isOpen()).count();
    }
}
