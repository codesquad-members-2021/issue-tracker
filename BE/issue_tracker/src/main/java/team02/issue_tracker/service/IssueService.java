package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.dto.DataResponse;
import team02.issue_tracker.repository.IssueRepository;

@Service
public class IssueService {

    private IssueRepository issueRepository;

    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public DataResponse getAllIssues() {
        return new DataResponse(issueRepository.findAll());
    }
}
