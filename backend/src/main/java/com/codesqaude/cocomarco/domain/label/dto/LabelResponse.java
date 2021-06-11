package com.codesqaude.cocomarco.domain.label.dto;

import com.codesqaude.cocomarco.domain.label.Label;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LabelResponse {

    private Long id;
    private String title;
    private String detail;
    private String hexCode;

    public static LabelResponse of(Label label) {
        return new LabelResponse(label.getId(), label.getTitle(), label.getDetail(), label.getHexCode());
    }
}
