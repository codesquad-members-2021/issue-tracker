package team02.issue_tracker.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team02.issue_tracker.domain.composite_key.IssueLabelId;

import javax.persistence.*;

@IdClass(IssueLabelId.class)
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class IssueLabel {

    @Id
    @ManyToOne
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @Id
    @ManyToOne
    @JoinColumn(name = "label_id")
    private Label label;

}
