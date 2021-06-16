package com.issuetracker.web.dto.vo;

import com.issuetracker.domain.milestone.Milestone;
import com.issuetracker.domain.user.User;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor
public class SearchRequest {

    private final Boolean status;
    private final String author;
    private final User assignee;
    private final User commenter;
    private final List<String> label;
    private final Milestone milestone;
}
