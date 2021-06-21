package team02.issue_tracker.dto.issue;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team02.issue_tracker.domain.Label;

@AllArgsConstructor
@Getter
public class IssueLabelResponse {

    private Long id;
    private String title;
    private String color;

    public IssueLabelResponse(Label label) {
        this(label.getId(), label.getTitle(), label.getColor());
    }
}
