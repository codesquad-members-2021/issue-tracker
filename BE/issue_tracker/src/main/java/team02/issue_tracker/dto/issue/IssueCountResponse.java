package team02.issue_tracker.dto.issue;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class IssueCountResponse {

    private int openIssues;
    private int closedIssues;
}
