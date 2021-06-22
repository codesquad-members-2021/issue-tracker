package team02.issue_tracker.dto;

import lombok.Getter;

@Getter
public class LabelCountResponse {

    private Long labelCount;

    public LabelCountResponse(Long labelCount) {
        this.labelCount = labelCount;
    }
}
