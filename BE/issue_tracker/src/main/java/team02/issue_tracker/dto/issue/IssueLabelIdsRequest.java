package team02.issue_tracker.dto.issue;

import lombok.Getter;

import java.util.List;

@Getter
public class IssueLabelIdsRequest {

    private List<Long> labelIds;
}
