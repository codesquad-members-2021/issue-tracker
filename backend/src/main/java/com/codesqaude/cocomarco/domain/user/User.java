package com.codesqaude.cocomarco.domain.user;

import com.codesqaude.cocomarco.domain.issue.model.Issue;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "users")
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

}
