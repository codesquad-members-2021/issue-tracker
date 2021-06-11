package com.codesqaude.cocomarco.domain.label;

import com.codesqaude.cocomarco.domain.issue.IssueLabel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "label")
    private List<IssueLabel> issueLabels = new ArrayList<>();

    private String title;
    private String hexCode;
    private String detail;

    public Label(String title, String hexCode, String detail) {
        this.title = title;
        this.hexCode = hexCode;
        this.detail = detail;
    }

    public void modify(Label label) {
        this.title = label.title;
        this.hexCode = label.hexCode;
        this.detail = label.detail;
    }
}
