package team02.issue_tracker.dto.issue;

import lombok.Getter;

import java.util.List;

@Getter
public class IssueAssigneeIdsRequest {

    private List<Long> assigneeIds;
}
