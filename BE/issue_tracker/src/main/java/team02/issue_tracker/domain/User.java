package team02.issue_tracker.domain;

import lombok.*;
import team02.issue_tracker.oauth.SocialLogin;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@ToString
@EqualsAndHashCode(exclude = {"id", "profileImage", "issueAssignees", "issues", "comments"})
@Getter
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private SocialLogin oauthResource;

    private String profileImage;

    @OneToMany(mappedBy = "assignee")
    private List<IssueAssignee> issueAssignees = new ArrayList<>();

    @OneToMany(mappedBy = "writer")
    private List<Issue> issues = new ArrayList<>();

    @OneToMany(mappedBy = "writer")
    private List<Comment> comments = new ArrayList<>();
}
