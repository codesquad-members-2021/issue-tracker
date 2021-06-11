package com.jane_eno.issue_tracker.web.dto.reqeust;

import com.jane_eno.issue_tracker.domain.comment.Comment;
import com.jane_eno.issue_tracker.domain.issue.Issue;
import com.jane_eno.issue_tracker.domain.user.User;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Setter
@ToString
@NoArgsConstructor
@Getter
public class IssueRequestDTO {

    private String title;
    private String comment;
    private List<Long> assignees;
    private List<Long> labels;
    private Long milestone;

    public Issue toEntity(User author) {
        return Issue.builder()
                .title(title)
                .comments(new ArrayList<>(Collections.singletonList(new Comment(comment, LocalDateTime.now(), author))))
                .build();
    }
}
