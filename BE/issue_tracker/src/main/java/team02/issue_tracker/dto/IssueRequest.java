package team02.issue_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class IssueRequest {

    private String title;
    private String comment;
    private String file;
    private Long userId;
    private List<Long> labelIds;
    private Long milestoneId;
    private List<Long> assigneeIds;
}
