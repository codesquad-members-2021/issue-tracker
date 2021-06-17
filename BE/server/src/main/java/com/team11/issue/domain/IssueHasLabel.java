package com.team11.issue.domain;

import lombok.*;

import javax.persistence.*;

@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "issue_has_label")
public class IssueHasLabel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "label_id")
    private Label label;

    public static IssueHasLabel createIssueHasLabel(Issue issue, Label label) {
        return IssueHasLabel.builder()
                .issue(issue)
                .label(label)
                .build();
    }
}
