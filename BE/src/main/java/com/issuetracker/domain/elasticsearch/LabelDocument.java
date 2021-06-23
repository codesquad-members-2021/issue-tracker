package com.issuetracker.domain.elasticsearch;

import com.issuetracker.domain.label.Color;
import com.issuetracker.domain.label.Label;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class LabelDocument {

    private String name;
    private Color color;
    private String description;

    public static LabelDocument of(Label label) {
        return LabelDocument.builder().
                name(label.getName())
                .color(label.getColor())
                .description(label.getDescription())
                .build();
    }

    public static List<LabelDocument> labelsToLabelDocuments(List<Label> labels) {
        return labels.stream().map(LabelDocument::of).collect(Collectors.toList());
    }
}
