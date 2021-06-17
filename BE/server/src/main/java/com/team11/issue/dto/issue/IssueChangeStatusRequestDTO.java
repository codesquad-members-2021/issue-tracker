package com.team11.issue.dto.issue;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class IssueChangeStatusRequestDTO {

    private List<Long> issueIds = new ArrayList<>();
    private String changeState;
}
