package com.issuetracker.domain.issue;

import com.issuetracker.web.dto.reqeust.FilterRequestDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CustomizedIssueRepository {

    List<Issue> findAllIssuesFilteredBySearchRequest(FilterRequestDTO searchRequest, Pageable pageable);

    long countIssueFilteredByStatusAndSearchRequest(String status, FilterRequestDTO searchRequest, Pageable pageable);
}
