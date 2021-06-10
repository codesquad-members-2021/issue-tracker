package com.jane_eno.issue_tracker.domain.label;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import com.jane_eno.issue_tracker.web.dto.response.LabelDTO;

@Getter
@Entity
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Embedded
    private Color color;

    private String description;

    //    @ManyToMany
//    private List<Issue> issues
    public static Label createLabel(LabelDTO labelDTO) {
        return Label.builder()
                .name(labelDTO.getName())
                .color(labelDTO.getColor())
                .description(labelDTO.getDescription())
                .build();
    }

    public boolean matchLabel(Label targetLabel) {
        return id.equals(targetLabel.id);
    }
}
