package com.codesqaude.cocomarco.domain.milestone;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
public class MilestoneRequest {

    private String title;
    private String detail;
    private LocalDate deadLine;

    public Milestone toEntity(){
        return new Milestone(title,detail,deadLine);
    }
}
