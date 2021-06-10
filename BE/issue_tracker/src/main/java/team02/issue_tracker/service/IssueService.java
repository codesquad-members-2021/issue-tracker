package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.dto.wrapping_dto.DataResponse;
import team02.issue_tracker.dto.wrapping_dto.ListDataResponse;
import team02.issue_tracker.dto.DetailIssueResponse;
import team02.issue_tracker.dto.IssueResponse;
import team02.issue_tracker.exception.IssueNotFoundException;
import team02.issue_tracker.repository.IssueRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    private IssueRepository issueRepository;

    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public ListDataResponse getAllIssueResponses() {
        List<IssueResponse> issueResponses = issueRepository.findAll().stream()
                .map(IssueResponse::new)
                .collect(Collectors.toList());

        return new ListDataResponse(issueResponses);
    }

    public DataResponse getDetailIssueResponse(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        DetailIssueResponse issueResponse = new DetailIssueResponse(issue);
        return new DataResponse(issueResponse);
    }
}
