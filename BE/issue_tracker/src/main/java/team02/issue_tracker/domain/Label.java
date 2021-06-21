package team02.issue_tracker.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import team02.issue_tracker.dto.LabelRequest;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE label SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
    private String color;
    private boolean isDeleted;

    @OneToMany(mappedBy = "label", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<IssueLabel> issueLabels = new ArrayList<>();

    public Label(String title, String content, String color) {
        this.title = title;
        this.content = content;
        this.color = color;
    }

    public void edit(LabelRequest labelRequest) {
        this.title = labelRequest.getTitle();
        this.content = labelRequest.getContent();
        this.color = labelRequest.getColor();
    }
}
