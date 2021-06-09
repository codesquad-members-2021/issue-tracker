package com.codesquad.issuetracker.label;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class LabelDummyData {
    private LabelDummyData() {
    }

    public static Set<LabelResponse> labelResponses() {
        return new HashSet<>(Arrays.asList(
                LabelResponse.builder()
                    .id(1L)
                    .name("backend")
                    .description("라벨 설명")
                    .color("라벨 컬러")
                    .build()
        ));
    }
}
