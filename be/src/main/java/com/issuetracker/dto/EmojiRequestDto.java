package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmojiRequestDto {
    @JsonProperty("issue_id")
    private Long issueId;

    @JsonProperty("comment_id")
    private Long commentId;

    private String code;
    private Boolean selected;

    public Long getIssueId() {
        return issueId;
    }

    public Long getCommentId() {
        return commentId;
    }

    public String getCode() {
        return code;
    }

    public Boolean getSelected() {
        return selected;
    }
}
