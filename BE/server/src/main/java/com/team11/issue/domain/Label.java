package com.team11.issue.domain;

import com.team11.issue.dto.label.LabelRequestDTO;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "label")
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private String color;

    private String bgColor;

    @OneToMany(mappedBy = "label")
    private List<IssueHasLabel> issueHasLabels = new ArrayList<>();

    public static Label createLabel(LabelRequestDTO labelRequestDTO) {
        return Label.builder()
                .title(labelRequestDTO.getTitle())
                .description(labelRequestDTO.getDescription())
                .color(labelRequestDTO.getColor())
                .bgColor(labelRequestDTO.getBgColor())
                .build();
    }

    public void updateLabel(LabelRequestDTO labelRequestDTO) {
        this.title = labelRequestDTO.getTitle();
        this.description = labelRequestDTO.getDescription();
        this.color = labelRequestDTO.getColor();
        this.bgColor = labelRequestDTO.getBgColor();
    }
}
