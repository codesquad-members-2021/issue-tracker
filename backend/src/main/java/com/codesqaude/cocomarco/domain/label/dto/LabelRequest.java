package com.codesqaude.cocomarco.domain.label.dto;

import com.codesqaude.cocomarco.domain.label.Label;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LabelRequest {

    private String title;
    private String detail;
    private String hexCode;

    public Label toEntity(){
        return new Label(title,detail,hexCode);
    }
}
