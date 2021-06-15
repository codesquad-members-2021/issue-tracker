package com.issuetracker.domain.issue;

import com.issuetracker.web.dto.reqeust.SearchRequestDTO;

import java.util.List;

public interface CustomizedIssueRepository {

    List<Issue> findAllIssuesFilteredBy(SearchRequestDTO searchRequest);

//    List<Issue> findAllIssuesFilteredBy(SearchRequest searchRequest);
}
