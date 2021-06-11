package com.jane_eno.issue_tracker.web.dto.response.vo;

import com.jane_eno.issue_tracker.domain.issue.Issue;
import com.jane_eno.issue_tracker.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@AllArgsConstructor
@ToString
public class Assignee {

    private final Long id;
    private final String image;
    private final String userName;
    private final boolean isAssigned;

    public static Assignee of(User user, Issue issue) {
        return Assignee.builder()
                .id(user.getId())
                .image(user.getAvatarUrl())
                .userName(user.getUserName())
                .isAssigned(issue.checkAssignees(user))
                .build();
    }

    public static Assignee of(User user) {
        return Assignee.builder()
                .id(user.getId())
                .image(user.getAvatarUrl())
                .userName(user.getUserName())
                .isAssigned(false)
                .build();
    }
}
