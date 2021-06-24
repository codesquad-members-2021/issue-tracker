package com.issuetracker.domain.issue;

import com.issuetracker.web.dto.reqeust.FilterRequestDTO;

import java.util.List;

public interface CustomizedIssueRepository {

    List<Issue> findAllIssuesFilteredBySearchRequest(FilterRequestDTO searchRequest);

    long countIssueFilteredByStatusAndSearchRequest(String status, FilterRequestDTO searchRequest);
}
