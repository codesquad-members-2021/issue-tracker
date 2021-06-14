package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Issue;
import com.codesquad.issuetracker.exception.NoSuchIssueException;
import com.codesquad.issuetracker.repository.IssueRepository;
import com.codesquad.issuetracker.response.IssueResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueService {

    private final IssueRepository issueRepository;

    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public List<Issue> getOpenedIssues() {
        return issueRepository.getIssuesByStatusTrue();
    }

    public List<Issue> getClosedIssues() {
        return issueRepository.getIssuesByStatusFalse();
    }

    public Issue getIssue(Long issueId) {
        return issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
    }

    public Issue addIssue(Issue issue) {
        return issueRepository.save(issue);
    }

//    private IssueResponse issueToIssueResponse(Issue issue) {
//        return new IssueResponse(issue.getId(), issue.getTitle(), issue.getContent(), issue.isStatus(), issue.getCreatedAt(),
//                issue.getLa)
//    }

//    public Issue updateIssue(Long issueId, Issue issue) {
//      //id로 Issue찾기 - Issue의 내용 변경 - save()로 저장(후 저장한 값 리턴)
//    }

    public void deleteIssue(Long issueId) {
        issueRepository.deleteById(issueId);
    }

}
