package com.issuetracker.issue;

import com.issuetracker.domain.Issue;
import com.issuetracker.domain.Label;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class IssueTestData {

    public final static Label firstLabel = new Label(1L, "테스트1", "테스트라벨1", "12345", "123411");

    public final static Label secondLabel = new Label(2L, "테스트2", "테스트라벨2", "aa12345", "aa123411");

    public final static List<Label> labels = new ArrayList<Label>(){{
        add(firstLabel);
        add(secondLabel);
    }};

    public final static Issue issue1 = new Issue(
            3L,
            "title",
            "description",
            1L,
            LocalDateTime.now(),
            true,
            false,
            1L,
            1L,
            4L,
            labels
    );

    public final static Issue issue2 = new Issue(
            4L,
            "title2",
            "description2",
            2L,
            LocalDateTime.now(),
            false,
            true,
            2L,
            2L,
            3L,
            labels
    );

}
