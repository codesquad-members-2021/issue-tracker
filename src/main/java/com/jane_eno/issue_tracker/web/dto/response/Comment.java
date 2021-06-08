package com.jane_eno.issue_tracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Builder;
import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
public class Comment {

    private final Long id;
    private final String userName;
    private final String comment;
    private final LocalDateTime createdDateTime;
    private final boolean isOwner;
    private final boolean isAuthor;
}
