package com.codesqaude.cocomarco.domain.milestone.dto;

import com.codesqaude.cocomarco.domain.milestone.Milestone;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
public class MilestoneRequest {

    private String title;
    private String detail;
    private LocalDate deadLine;

    public Milestone toEntity() {
        return new Milestone(title, detail, deadLine);
    }
}
