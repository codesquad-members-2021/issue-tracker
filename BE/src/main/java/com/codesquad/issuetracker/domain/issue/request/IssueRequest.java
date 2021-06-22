package com.codesquad.issuetracker.domain.issue.request;

import com.codesquad.issuetracker.domain.assignee.request.AssigneeRequest;
import com.codesquad.issuetracker.domain.user.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class IssueRequest {

    private String title;
    private String content;
    private boolean status;

    @JsonProperty("created_at")
    @JsonFormat(pattern = "yyyy-MM-dd kk:mm:ss")
    private LocalDateTime createdAt;

    @JsonProperty("user")
    private User user;

    @JsonProperty("milestone_id")
    private Long milestoneId;

    @JsonProperty("label_id_list")
    private ArrayList<Long> labelList;

    @JsonProperty("assignee_list")
    private ArrayList<AssigneeRequest> assigneeList;
}
