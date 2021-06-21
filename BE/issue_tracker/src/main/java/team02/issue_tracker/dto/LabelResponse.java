package team02.issue_tracker.dto;

import lombok.Getter;
import team02.issue_tracker.domain.Label;

@Getter
public class LabelResponse {

    private Long id;
    private String title;
    private String content;
    private String color;

    public LabelResponse(Label label) {
        this.id = label.getId();
        this.title = label.getTitle();
        this.content = label.getContent();
        this.color = label.getColor();
    }
}
