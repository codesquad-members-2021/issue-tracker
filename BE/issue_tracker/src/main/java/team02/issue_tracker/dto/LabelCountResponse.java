package team02.issue_tracker.dto;

import lombok.Getter;

@Getter
public class LabelCountResponse {

    private Long labels;

    public LabelCountResponse(Long labels) {
        this.labels = labels;
    }
}
