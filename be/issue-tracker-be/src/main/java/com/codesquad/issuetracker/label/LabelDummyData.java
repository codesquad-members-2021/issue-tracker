package com.codesquad.issuetracker.label;

import java.util.Arrays;
import java.util.List;

public class LabelDummyData {
    private LabelDummyData() {
    }

    public static List<LabelResponse> labelResponses() {
        return Arrays.asList(
                LabelResponse.builder()
                    .id(1L)
                    .name("backend")
                    .description("라벨 설명")
                    .color("라벨 컬러")
                    .build()
        );
    }
}
