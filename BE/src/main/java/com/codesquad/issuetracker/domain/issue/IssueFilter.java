package com.codesquad.issuetracker.domain.issue;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class IssueFilter {

    private String title;
    private Long commenter;
    private Boolean status;
    private Long author;
    private Long assignee;

}
