package team02.issue_tracker.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team02.issue_tracker.domain.Label;

@NoArgsConstructor
@Getter
public class LabelRequest {

    private String title;
    private String content;
    private String color;

    public Label toLabel() {
        return new Label(title, content, color);
    }
}
