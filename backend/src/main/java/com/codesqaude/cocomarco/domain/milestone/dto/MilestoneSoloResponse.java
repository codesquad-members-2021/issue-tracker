package com.codesqaude.cocomarco.domain.milestone.dto;

import com.codesqaude.cocomarco.domain.milestone.Milestone;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;
import java.util.Objects;

@Getter
@AllArgsConstructor
public class MilestoneSoloResponse {

    private Long id;
    private String title;
    private String detail;
    private LocalDate deadLine;

    public static MilestoneSoloResponse of(Milestone milestone) {
        if (Objects.isNull(milestone)) {
            return null;
        }
        return new MilestoneSoloResponse(milestone.getId(), milestone.getTitle(), milestone.getDetail(), milestone.getDeadLine());
    }
}
