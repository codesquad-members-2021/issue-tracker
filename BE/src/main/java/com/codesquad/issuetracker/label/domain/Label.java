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
    @Column(columnDefinition = "BINARY(16)", name = "LABEL_ID")
    private UUID id;

    @Column(name = "LABEL_NAME")
    private String name;

    @Column(name = "LABEL_DESCRIPTION")
    private String description;

    @Embedded
    private Colors colors;

    protected Label() {
    }

    private Label(String name, String description, Colors colors) {
        this.name = name;
        this.description = description;
        this.colors = colors;
    }

    public static Label create(String name, String description, Colors colors) {
        if (name == null || name.length() == 0) {
            throw new IllegalArgumentException("Label name is empty or null");
        }

        if (colors == null) {
            throw new IllegalArgumentException("Colors is null");
        }

        return new Label(name, description, colors);
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
