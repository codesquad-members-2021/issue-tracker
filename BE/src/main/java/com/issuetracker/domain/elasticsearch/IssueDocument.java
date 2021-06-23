package com.issuetracker.domain.elasticsearch;

import com.issuetracker.domain.issue.Issue;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@Document(indexName = "issue")
public class IssueDocument {

    @Id
    private Long id;
    private UserDocument author;
    private List<UserDocument> assignees;
    private List<LabelDocument> labels;
    private MilestoneDocument milestone;
    private boolean isOpen;
    private String title;
    private List<CommentDocument> comments;
    private LocalDateTime createdDateTime;
    private LocalDateTime modifiedDateTime;

    public static IssueDocument of(Issue issue) {
        return IssueDocument.builder()
                .id(issue.getId())
                .author(UserDocument.of(issue.getAuthor()))
                .assignees(UserDocument.usersToUserDocuments(issue.getAssignees()))
                .labels(LabelDocument.labelsToLabelDocuments(issue.getLabels()))
                .milestone(MilestoneDocument.of(issue.getMilestone()))
                .isOpen(issue.isOpen())
                .title(issue.getTitle())
                .comments(CommentDocument.commentsToCommentDocuments(issue.getComments()))
                .createdDateTime(issue.getCreatedDateTime())
                .modifiedDateTime(issue.getModifiedDateTime())
                .build();
    }

    public String getFirstComment() {
        return comments.get(0).getComment();
    }

    public int getCommentNumber() {
        return comments.size();
    }

    public String getMilestoneTitle() {
        if (milestone == null) {
            return null;
        }
        return milestone.getTitle();
    }
}
