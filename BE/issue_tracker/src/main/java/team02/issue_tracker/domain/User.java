package team02.issue_tracker.domain;

import lombok.*;
import team02.issue_tracker.oauth.dto.SocialLogin;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Builder
@Getter
@Entity
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private SocialLogin oauthResource;

    private String username;
    private String email;
    private String profileImage;

    @OneToMany(mappedBy = "assignee")
    private List<IssueAssignee> issueAssignees = new ArrayList<>();

    @OneToMany(mappedBy = "writer")
    private List<Issue> issues = new ArrayList<>();

    @OneToMany(mappedBy = "writer")
    private List<Comment> comments = new ArrayList<>();
}
