package com.codesquad.issuetracker.label.domain;

import lombok.Getter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;
import java.util.UUID;

@Entity
@Getter
public class Label {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)", name = "label_id")
    private UUID id;

    @Embedded
    private BackgroundColor backgroundColor;

    @Embedded
    private LabelName name;
    private String description;

    protected Label() {
    }

    private Label(UUID id, BackgroundColor backgroundColor, LabelName name, String description) {
        this.id = id;
        this.backgroundColor = backgroundColor;
        this.name = name;
        this.description = description;
    }

    public static Label newLabel(BackgroundColor backgroundColor, LabelName name, String description) {
        return new Label(null, backgroundColor, name, description);
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Label label = (Label) o;
        return id.equals(label.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
