package team02.issue_tracker.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class LabelRequest {

    private String title;
    private String content;
    private String color;
}
