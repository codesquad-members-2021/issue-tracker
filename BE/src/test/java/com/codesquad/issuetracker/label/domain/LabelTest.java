package com.codesquad.issuetracker.label.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class LabelTest {

    @Test
    @DisplayName("If Label name is null, throw IllegalArgumentException")
    void createIfLabelNameIsNull() {
        assertThatThrownBy(() -> Label.create(null, "null Label", Colors.of("#000000", "#FFFFFF")))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Label name is empty or null");
    }

    @Test
    @DisplayName("If Label name is empty, throw IllegalArgumentException")
    void createIfLabelNameIsEmpty() {
        assertThatThrownBy(() -> Label.create("", "empty Label", Colors.of("#000000", "#FFFFFF")))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Label name is empty or null");
    }

    @Test
    @DisplayName("If Colors is null, throw IllegalArgumentException")
    void createIfLabelColorsIsNull() {
        assertThatThrownBy(() -> Label.create("Color null label", "null color label", null))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Colors is null");
    }

    @Test
    @DisplayName("Can create Label instance")
    void createValidInstance() {
        Label documentation = Label.create("documentation", "문서화를 위한 레이블", Colors.of("#000000", "#ffffff"));
        assertThat(documentation).isNotNull();
        assertThat(documentation.getName()).isEqualTo("documentation");
        assertThat(documentation.getDescription()).isEqualTo("문서화를 위한 레이블");
    }

}
