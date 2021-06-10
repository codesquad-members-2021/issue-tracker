package team02.issue_tracker.dto.issue;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team02.issue_tracker.domain.*;

import java.util.List;

@NoArgsConstructor
@Getter
public class IssueRequest {

    private String title;
    private String comment;
    private String file;
    private Long userId;
    private List<Long> labelIds;
    private Long milestoneId;
    private List<Long> assigneeIds;

    public Issue toIssue(User writer, List<Label> labels, Milestone milestone, List<User> assignees) {
        return new Issue(title, comment, file, writer, true, labels, milestone, assignees);
    }
}
