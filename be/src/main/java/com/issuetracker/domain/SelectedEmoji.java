package com.issuetracker.domain;

public class SelectedEmoji {
    private Long id;
    private Boolean thumbsUp;
    private Boolean heartEyes;
    private Long issueId;
    private Long commentId;
    private Long userId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getThumbsUp() {
        return thumbsUp;
    }

    public void setThumbsUp(Boolean thumbsUp) {
        this.thumbsUp = thumbsUp;
    }

    public Boolean getHeartEyes() {
        return heartEyes;
    }

    public void setHeartEyes(Boolean heartEyes) {
        this.heartEyes = heartEyes;
    }

    public Long getIssueId() {
        return issueId;
    }

    public void setIssueId(Long issueId) {
        this.issueId = issueId;
    }

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
