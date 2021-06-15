package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.IssueLabel;
import team02.issue_tracker.domain.Label;
import team02.issue_tracker.dto.LabelCountResponse;
import team02.issue_tracker.dto.LabelRequest;
import team02.issue_tracker.dto.LabelResponse;
import team02.issue_tracker.dto.issue.IssueLabelIdsRequest;
import team02.issue_tracker.exception.LabelNotFoundException;
import team02.issue_tracker.repository.IssueLabelRepository;
import team02.issue_tracker.repository.LabelRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class LabelService {

    private final LabelRepository labelRepository;
    private final IssueLabelRepository issueLabelRepository;

    public LabelService(LabelRepository labelRepository, IssueLabelRepository issueLabelRepository) {
        this.labelRepository = labelRepository;
        this.issueLabelRepository = issueLabelRepository;
    }

    public List<IssueLabel> makeIssueLabels(Issue issue, List<Long> labelIds) {
        List<IssueLabel> issueLabels = new ArrayList<>();

        labelIds.forEach(labelId -> {
            Label label = labelRepository.findById(labelId).orElseThrow(LabelNotFoundException::new);
            issueLabels.add(new IssueLabel(issue, label));
        });

        return issueLabelRepository.saveAll(issueLabels);
    }

    public List<IssueLabel> modifyIssueLabels(Issue issue, IssueLabelIdsRequest issueLabelIdsRequest) {
        deleteIssueLabels(issue);
        return makeIssueLabels(issue, issueLabelIdsRequest.getLabelIds());
    }

    public void deleteIssueLabels(Issue issue) {
        List<IssueLabel> issueLabels = issueLabelRepository.findByIssueId(issue.getId());
        issueLabelRepository.deleteAll(issueLabels);
    }

    public List<LabelResponse> getAllLabelResponses() {
        return labelRepository.findAll().stream()
                .map(LabelResponse::new)
                .collect(Collectors.toList());
    }

    public LabelCountResponse getLabelCount() {
        int labelCount = labelRepository.findAll().size();
        return new LabelCountResponse(labelCount);
    }

    public void modifyLabel(Long labelId, LabelRequest labelRequest) {
        Label label = labelRepository.findById(labelId).orElseThrow(LabelNotFoundException::new);
        label.edit(labelRequest);
        labelRepository.save(label);
    }

    public void addLabel(LabelRequest labelRequest) {
        Label label = labelRequest.toLabel();
        labelRepository.save(label);
    }

    public void deleteLabel(Long labelId) {
        Label label = labelRepository.findById(labelId).orElseThrow(LabelNotFoundException::new);
        label.delete();
        labelRepository.save(label);
        deleteIssueLabels(labelId);
    }

    private void deleteIssueLabels(Long labelId) {
        List<IssueLabel> issueLabels = issueLabelRepository.findByLabelId(labelId);
        issueLabelRepository.deleteAll(issueLabels);
    }
}
