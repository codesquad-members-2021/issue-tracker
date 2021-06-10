package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.dto.DataResponse;
import team02.issue_tracker.dto.IssueResponse;
import team02.issue_tracker.repository.IssueRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    private IssueRepository issueRepository;

    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public DataResponse getAllIssueResponses() {
        List<IssueResponse> issueResponses = issueRepository.findAll().stream()
                .map(IssueResponse::toIssueResponse)
                .collect(Collectors.toList());

        return new DataResponse(issueResponses);
    }
}
