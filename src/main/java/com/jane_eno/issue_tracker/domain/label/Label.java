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
    
    public static Label create(LabelDTO labelDTO) {
        return Label.builder()
                .name(labelDTO.getName())
                .color(labelDTO.getColor())
                .description(labelDTO.getDescription())
                .build();
    }

    public Label update(LabelDTO labelDTO) {
        this.name = labelDTO.getName();
        this.description = labelDTO.getDescription();
        this.color = labelDTO.getColor();
        return this;
    }

    public boolean matchLabel(Label targetLabel) {
        return id.equals(targetLabel.id);
    }
}
