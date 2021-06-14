package com.codesquad.issuetracker.comment.domain;

import com.codesquad.issuetracker.user.domain.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Comment {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)", name = "COMMENT_ID")
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    @Column(name = "COMMENT_AUTHOR")
    private User author;

    @Column(name = "COMMENT_CREATED_AT")
    private LocalDateTime createdAt;

    @Lob
    @Column(name = "COMMENT_CONTENT")
    private String content;
}
