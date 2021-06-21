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

        return labelIds.stream()
                .map(labelId -> {
                    Label label = labelRepository.findById(labelId).orElseThrow(LabelNotFoundException::new);
                    return new IssueLabel(issue, label);
                }).collect(Collectors.toList());
    }

    public List<IssueLabel> modifyIssueLabels(Issue issue, IssueLabelIdsRequest issueLabelIdsRequest) {
        deleteIssueLabels(issue);
        List<IssueLabel> issueLabels = makeIssueLabels(issue, issueLabelIdsRequest.getLabelIds());
        return issueLabelRepository.saveAll(issueLabels);
    }

    private void deleteIssueLabels(Issue issue) {
        List<IssueLabel> issueLabels = issueLabelRepository.findByIssueId(issue.getId());
        issueLabelRepository.deleteAll(issueLabels);
    }

    public List<LabelResponse> getAllLabelResponses() {
        return labelRepository.findAll().stream()
                .map(LabelResponse::new)
                .collect(Collectors.toList());
    }

    public LabelCountResponse getLabelCountResponse() {
        return new LabelCountResponse(getLabelCount());
    }

    public Long getLabelCount() {
        return labelRepository.countByIsDeletedFalse();
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
        labelRepository.delete(label);
    }
}
