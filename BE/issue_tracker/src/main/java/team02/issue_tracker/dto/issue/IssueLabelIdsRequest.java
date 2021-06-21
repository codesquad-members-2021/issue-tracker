package team02.issue_tracker.dto.issue;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Getter
public class IssueLabelIdsRequest {

    private List<Long> labelIds;
}
