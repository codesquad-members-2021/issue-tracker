package com.issuetracker.domain.elasticsearch;

import com.issuetracker.domain.issue.Issue;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.DateFormat;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@Document(indexName = "issue")
@ToString
public class IssueDocument {

    @Id
    private Long id;
    private UserDocument author;
    private List<UserDocument> assignees;
    private List<LabelDocument> labels;
    private MilestoneDocument milestone;
    @Field(type = FieldType.Boolean)
    private boolean isOpen;
    private String title;
    private List<CommentDocument> comments;
    @Field(type = FieldType.Date, format = DateFormat.date_hour_minute_second_millis)
    private LocalDateTime createdDateTime;
    @Field(type = FieldType.Date, format = DateFormat.date_hour_minute_second_millis)
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
