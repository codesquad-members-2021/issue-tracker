package com.codesquad.issuetracker.label.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

class ColorsTest {

    @Test
    @DisplayName("If Color Format is invalid, throw exception.")
    void invalid() {
        assertThatThrownBy(() -> Colors.of("#flkjzv", "#444444")).isInstanceOf(IllegalArgumentException.class);
        assertThatThrownBy(() -> Colors.of("#000000", "444444")).isInstanceOf(IllegalArgumentException.class);
        assertThatThrownBy(() -> Colors.of("233jka500000", "444444")).isInstanceOf(IllegalArgumentException.class);
    }

    @Test
    @DisplayName("Can create Colors instance if color format is valid.")
    void validInstanceCreate() {
        String backgroundColor = "#ffffff";
        String textColor = "#000000";

        Colors myColor = Colors.of("#ffffff", "#000000");

        assertThat(myColor.getBackgroundColor()).isEqualTo(backgroundColor);
        assertThat(myColor.getTextColor()).isEqualTo(textColor);
    }
}
