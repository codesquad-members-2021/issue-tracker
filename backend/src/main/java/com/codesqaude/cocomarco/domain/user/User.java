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

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID id;

    @OneToMany(mappedBy = "writer")
    private List<Issue> issues = new ArrayList<>();

    private String name;
    private String avatarImage;

    public User(String name, String avatarImage) {
        this.name = name;
        this.avatarImage = avatarImage;
    }

    public boolean sameUser(UUID userId) {
        return id.equals(userId);
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
