package com.issuetracker.web.dto.reqeust;

import com.issuetracker.domain.issue.Issue;
import lombok.*;

@Setter
@ToString
@Getter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class IssueTitleDTO {

    private String title;

    public static IssueTitleDTO of(Issue issue) {
        return IssueTitleDTO.builder()
                .title(issue.getTitle())
                .build();
    }
}
