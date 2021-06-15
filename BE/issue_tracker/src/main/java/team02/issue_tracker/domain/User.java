package team02.issue_tracker.domain;

import lombok.*;
import team02.issue_tracker.oauth.dto.SocialLogin;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor
@Getter
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;

    @Enumerated(EnumType.STRING)
    private SocialLogin oauthResource;

    private String username;
    private String email;
    private String profileImage;

    @OneToMany(mappedBy = "assignee")
    private final List<IssueAssignee> issueAssignees = new ArrayList<>();

    @OneToMany(mappedBy = "writer")
    private final List<Issue> issues = new ArrayList<>();

    @OneToMany(mappedBy = "writer")
    private final List<Comment> comments = new ArrayList<>();
}
