package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.IssueLabel;
import team02.issue_tracker.domain.Label;
import team02.issue_tracker.dto.issue.IssueRequest;
import team02.issue_tracker.exception.LabelNotFoundException;
import team02.issue_tracker.repository.IssueLabelRepository;
import team02.issue_tracker.repository.LabelRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class LabelService {

    private final LabelRepository labelRepository;
    private final IssueLabelRepository issueLabelRepository;

    public LabelService(LabelRepository labelRepository, IssueLabelRepository issueLabelRepository) {
        this.labelRepository = labelRepository;
        this.issueLabelRepository = issueLabelRepository;
    }

    public List<IssueLabel> makeIssueLabels(Issue issue, IssueRequest issueRequest) {
        List<IssueLabel> issueLabels = new ArrayList<>();

        issueRequest.getLabelIds().stream()
                .forEach(labelId -> {
                    Label label = labelRepository.findById(labelId).orElseThrow(LabelNotFoundException::new);
                    issueLabels.add(new IssueLabel(issue, label));
                });

        return issueLabelRepository.saveAll(issueLabels);
    }
}
