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
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;

    @Autowired
    public IssueService(IssueRepository issueRepository, LabelRepository labelRepository,
                        MilestoneRepository milestoneRepository) {
        this.issueRepository = issueRepository;
        this.labelRepository = labelRepository;
        this.milestoneRepository = milestoneRepository;
    }

    public List<IssueResponse> getOpenedIssues() {
        List<IssueResponse> result = new ArrayList<>();
        List<Issue> issues = issueRepository.getIssuesByStatusTrue();
        for(Issue issue : issues) {
            result.add(issueToIssueResponse(issue));
        }
        return result;
    }

    public List<IssueResponse> getClosedIssues() {
        List<IssueResponse> result = new ArrayList<>();
        List<Issue> issues = issueRepository.getIssuesByStatusFalse();
        for(Issue issue : issues) {
            result.add(issueToIssueResponse(issue));
        }
        return result;
    }

    public IssueResponse getIssue(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(NoSuchIssueException::new);
        return issueToIssueResponse(issue);
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

    private IssueResponse issueToIssueResponse(Issue issue) {
        return new IssueResponse(issue.getId(), issue.getTitle(), issue.getContent(), issue.isStatus(), issue.getCreatedAt(),
                makeLabelResponses(issue.getId()), makeUserResponses(issue.getUser()),
                makeMilestoneForIssueResponse(issue.getMilestoneId()));
    }

    private Set<LabelResponse> makeLabelResponses(Long issueId) {
        Set<Label> labels = labelRepository.findByIssueId(issueId);
        Set<LabelResponse> result = new HashSet<>();
        for (Label label : labels) {
            result.add(LabelResponse.labelToLabelResponse(label));
        }
        return result;
    }

    private UserResponse makeUserResponses(User user) {
        return new UserResponse(user.getName(), user.getLoginId());
    }

    private MilestoneForIssueResponse makeMilestoneForIssueResponse(Long milestoneId) {
        if (milestoneId == null) {
            return new MilestoneForIssueResponse();
        }
        Milestone milestone = milestoneRepository.findById(milestoneId).orElseThrow(NoSuchElementException::new);
        return MilestoneForIssueResponse.milestoneToMilestoneForIssueResponse(milestone);
    }
}
