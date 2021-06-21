package team02.issue_tracker.dto.issue;

import lombok.Getter;

import java.util.List;

@Getter
public class IssueIdsRequest {

    private List<Long> issueIds;
}
