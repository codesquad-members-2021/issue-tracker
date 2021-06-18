package team02.issue_tracker.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team02.issue_tracker.dto.LabelRequest;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Label {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String content;
    private String color;
    private boolean deleted;

    @OneToMany(mappedBy = "label")
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

    public void delete() {
        deleted = true;
    }
}
