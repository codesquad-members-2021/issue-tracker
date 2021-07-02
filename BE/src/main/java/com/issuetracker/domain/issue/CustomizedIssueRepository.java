package com.issuetracker.domain.issue;

import com.issuetracker.web.dto.reqeust.FilterRequestDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CustomizedIssueRepository {

    Page<Issue> findAllIssuesFilteredBySearchRequest(FilterRequestDTO searchRequest, Pageable pageable);

    long countIssueFilteredByStatusAndSearchRequest(String status, FilterRequestDTO searchRequest, Pageable pageable);
}
