package team02.issue_tracker.dto.issue;

import lombok.Getter;
import team02.issue_tracker.domain.Label;

@Getter
public class IssueLabelResponse {

    private Long id;
    private String title;
    private String color;

    public IssueLabelResponse(Label label) {
        this.id = label.getId();
        this.title = label.getTitle();
        this.color = label.getColor();
    }
}
