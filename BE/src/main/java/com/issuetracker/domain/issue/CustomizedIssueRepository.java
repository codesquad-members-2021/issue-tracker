package com.issuetracker.domain.issue;

import com.issuetracker.web.dto.reqeust.SearchRequestDTO;

import java.util.List;

public interface CustomizedIssueRepository {

    List<Issue> findAllIssuesFilteredBySearchRequest(SearchRequestDTO searchRequest);

    long countIssueFilteredByStatusAndSearchRequest(String status, SearchRequestDTO searchRequest);
}
