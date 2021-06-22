package com.codesquad.issuetracker.label.domain;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.util.regex.Pattern;

@Embeddable
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@RequiredArgsConstructor
public class Colors {

    @NonNull
    @Column(name = "LABEL_BACKGROUND_COLOR", nullable = false)
    private String backgroundColor;

    @NonNull
    @Column(name = "LABEL_TEXT_COLOR", nullable = false)
    private String textColor;

    private Colors(Builder builder) {
        this.backgroundColor = builder.backgroundColor;
        this.textColor = builder.textColor;
    }

    public static class Builder {
        private static final Pattern COLOR = Pattern.compile("#[0-9A-Fa-f]{6}");

        private String backgroundColor;
        private String textColor;

        public Builder backgroundColor(String backgroundColor) {
            checkColorFormat(backgroundColor);
            this.backgroundColor = backgroundColor;
            return this;
        }

        public Builder textColor(String textColor) {
            checkColorFormat(textColor);
            this.textColor = textColor;
            return this;
        }

        private static void checkColorFormat(String textColor) {
            if (!COLOR.matcher(textColor).matches()) {
                throw new IllegalArgumentException("Color Format is invalid");
            }
        }

        public Colors build() {
            return new Colors(this);
        }
    }
}
