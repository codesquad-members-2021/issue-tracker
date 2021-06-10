package team02.issue_tracker.dto;

import lombok.Getter;
import team02.issue_tracker.domain.Issue;

import java.util.List;

@Getter
public class DetailIssueResponse extends AbstractIssueResponse {

    private MilestoneDetailResponse milestone;
    private List<CommentResponse> comments;

    public DetailIssueResponse(Issue issue) {
        super(issue);
        this.milestone = new MilestoneDetailResponse(issue.getMilestone());
        // Todo: issue의 comment를 CommentResponse 타입으로 변경해서 값 넣기
    }
}
