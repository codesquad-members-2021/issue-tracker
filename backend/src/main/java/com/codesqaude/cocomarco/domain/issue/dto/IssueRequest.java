package com.codesqaude.cocomarco.domain.issue.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class IssueRequest {

    private String title;
    private String text;
    private List<String> assignments;
    private List<Long> labels;
    private Long milestone;

    public List<UUID> getUserIds() {
        return assignments.stream()
                .map(UUID::fromString)
                .collect(Collectors.toList());
    }
}
