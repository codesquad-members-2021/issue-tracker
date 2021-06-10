package team02.issue_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team02.issue_tracker.domain.Label;

@AllArgsConstructor
@Getter
public class LabelResponse {

    private Long id;
    private String title;
    private String color;

    public LabelResponse(Label label) {
        this(label.getId(), label.getTitle(), label.getColor());
    }
}
