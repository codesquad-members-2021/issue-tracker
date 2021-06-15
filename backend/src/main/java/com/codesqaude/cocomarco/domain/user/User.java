package com.codesqaude.cocomarco.domain.user;

import com.codesqaude.cocomarco.domain.issue.model.Issue;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "users")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    public static final UUID SAMPLE_UUID = UUID.fromString("3eb62438-9604-45f9-a183-b838d2123793");

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID id;

    @OneToMany(mappedBy = "writer")
    private List<Issue> issues = new ArrayList<>();

    private Long githubId;
    private String email;
    private String name;
    private String avatarImage;

    public User(String name, String avatarImage, Long githubId, String email) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.avatarImage = avatarImage;
        this.githubId = githubId;
        this.email = email;
    }

    public boolean sameUser(UUID userId) {
        return id.equals(userId);
    }

    public void addIssue(Issue issue) {
        issues.add(issue);
    }

    public void update(User user) {
        this.name = user.name;
        this.avatarImage = user.avatarImage;
        this.githubId = user.githubId;
        this.email = user.email;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", avatarImage='" + avatarImage + '\'' +
                '}';
    }


}
