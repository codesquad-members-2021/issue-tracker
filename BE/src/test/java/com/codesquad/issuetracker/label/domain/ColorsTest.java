package com.codesquad.issuetracker.label.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

class ColorsTest {

    @Test
    @DisplayName("If Color Format is invalid, throw exception.")
    void invalid() {
        assertThatThrownBy(() -> {
            new Colors.Builder()
                    .backgroundColor("#flkjzv")
                    .textColor("#444444")
                    .build();
        }).isInstanceOf(IllegalArgumentException.class);

        assertThatThrownBy(() -> {
            new Colors.Builder()
                    .backgroundColor("233jka500000")
                    .textColor("444444")
                    .build();
        }).isInstanceOf(IllegalArgumentException.class);

        assertThatThrownBy(() -> {
            new Colors.Builder()
                    .backgroundColor("#000000")
                    .textColor("444444")
                    .build();
        }).isInstanceOf(IllegalArgumentException.class);
    }

    @Test
    @DisplayName("Can create Colors instance if color format is valid.")
    void validInstanceCreate() {
        String backgroundColor = "#ffffff";
        String textColor = "#000000";

        Colors myColor = new Colors.Builder()
                .backgroundColor("#ffffff")
                .textColor("#000000")
                .build();

        assertThat(myColor.getBackgroundColor()).isEqualTo(backgroundColor);
        assertThat(myColor.getTextColor()).isEqualTo(textColor);
    }
}
