package com.jane_eno.issue_tracker.domain.comment;

import com.jane_eno.issue_tracker.domain.issue.Issue;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String comment;
    private LocalDateTime createdDateTime;

    @ManyToOne
    @JoinColumn
    private Issue issue;
}
