package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.common.exception.NotFoundIssueException;
import com.codesqaude.cocomarco.domain.issue.IssueRepository;
import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueTitleRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class IssueModifyService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    private final IssueRepository issueRepository;

    @Transactional
    public void modifyTitle(Long issueId, IssueTitleRequest issueTitleRequest) {
        Issue issue = findById(issueId);
        issue.changeTitle(issueTitleRequest.getTitle());
    }
    

    public Issue findById(Long issueId) {
        return issueRepository.findById(issueId).orElseThrow(NotFoundIssueException::new);
    }
}
