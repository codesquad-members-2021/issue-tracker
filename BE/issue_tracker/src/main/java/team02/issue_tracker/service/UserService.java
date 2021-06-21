package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.IssueAssignee;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.dto.issue.IssueAssigneeIdsRequest;
import team02.issue_tracker.exception.UserNotFoundException;
import team02.issue_tracker.repository.IssueAssigneeRepository;
import team02.issue_tracker.repository.UserRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final IssueAssigneeRepository issueAssigneeRepository;

    public UserService(UserRepository userRepository, IssueAssigneeRepository issueAssigneeRepository) {
        this.userRepository = userRepository;
        this.issueAssigneeRepository = issueAssigneeRepository;
    }

    public User enroll(User user) {
        return userRepository.save(user);
    }

    public User findByUser(User user) {
        return userRepository.findUserByOauthResourceAndUsername(
                user.getOauthResource(), user.getUsername());
    }

    public User findOne(Long id) {
        return userRepository.findById(id).orElseThrow(UserNotFoundException::new);
    }

    public List<IssueAssignee> makeIssueAssignees(Issue issue, List<Long> assigneeIds) {
        return assigneeIds.stream()
                .map(assigneeId -> {
                    User assignee = userRepository.findById(assigneeId).orElseThrow(UserNotFoundException::new);
                    return new IssueAssignee(issue, assignee);
                }).collect(Collectors.toList());
    }

    public List<IssueAssignee> modifyIssueAssignees(Issue issue, IssueAssigneeIdsRequest issueAssigneeIdsRequest) {
        deleteIssueAssignees(issue);
        List<IssueAssignee> issueAssignees = makeIssueAssignees(issue, issueAssigneeIdsRequest.getAssigneeIds());
        return issueAssigneeRepository.saveAll(issueAssignees);
    }

    public void deleteIssueAssignees(Issue issue) {
        List<IssueAssignee> issueAssignees = issueAssigneeRepository.findByIssueId(issue.getId());
        issueAssigneeRepository.deleteAll(issueAssignees);
    }
}
