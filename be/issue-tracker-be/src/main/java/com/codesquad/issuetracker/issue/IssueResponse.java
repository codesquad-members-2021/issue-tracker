package com.codesquad.issuetracker.issue;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class IssueResponse {
    private Long id;
    private long number;
    private String title;
    private String description;
    private boolean isClosed;
    private boolean isAuthorSame;//TODO: 작성자 있으면 작성자로 필터링 가능한 것 아닌지?
    private LocalDateTime createDateTime;
    private User author;
    private List<User> assignees;
    private List<Label> labels;
    private Milestone milestone;

    @Data
    @Builder
    public static class User {
        private long id;
        private String email;
        private String name;
    }

    @Data
    @Builder
    public static class Label {
        private Long id;
        private String name;
        private String description;
        private String color;
    }

    @Data
    @Builder
    public static class Milestone {
        private Long id;
        private String name;
        private String description;
        private boolean isClosed;
        private int openedIssueCount;
        private int closedIssueCount;
    }
}
