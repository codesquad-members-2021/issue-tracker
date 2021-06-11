package com.codesquad.issuetracker.label.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class LabelTest {

    private final Colors blackWhite = new Colors.Builder()
            .backgroundColor("#000000")
            .textColor("#ffffff")
            .build();

    @Test
    @DisplayName("If Label name is null, throw IllegalArgumentException")
    void createIfLabelNameIsNull() {
        assertThatThrownBy(() -> Label.create(null, "null Label", blackWhite))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Label name is empty or null");
    }

    @Test
    @DisplayName("If Label name is empty, throw IllegalArgumentException")
    void createIfLabelNameIsEmpty() {
        assertThatThrownBy(() -> Label.create("", "empty Label", blackWhite))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Label name is empty or null");
    }

    @Test
    @DisplayName("If Label name is too long, throw IllegalArgumentException")
    void createTooLongNamedLabel() {
        assertThatThrownBy(
                () -> Label.create("1234567890123456789012345678901234567890123456789012", "Too Long name", blackWhite))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Label name is too long (max 50)");
    }

    @Test
    @DisplayName("If Label name is too long, throw IllegalArgumentException")
    void createTooLongDescriptionLabel() {
        assertThatThrownBy(() -> Label.create("Too Long Description Label",
                "12345678901234567890123456789012345678901234567890121234567890123456789012345678901234567890123456789012", blackWhite))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Label description is too long (max 100)");
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
        Label documentation = Label.create("documentation", "문서화를 위한 레이블", blackWhite);
        assertThat(documentation).isNotNull();
        assertThat(documentation.getName()).isEqualTo("documentation");
        assertThat(documentation.getDescription()).isEqualTo("문서화를 위한 레이블");
    }

    @Test
    @DisplayName("Update Label")
    void updateLabel() {
        Label label = Label.create("feat", "기능", new Colors.Builder()
                .backgroundColor("#123456")
                .textColor("#567890")
                .build());
        Label updateInfo = Label.create("feature", "기능 구현", new Colors.Builder()
                        .backgroundColor("#111111")
                        .textColor("#EEEEEE")
                        .build());

        label.update(updateInfo);

        assertThat(label.getName()).isEqualTo("feature");
        assertThat(label.getDescription()).isEqualTo("기능 구현");
    }

}
