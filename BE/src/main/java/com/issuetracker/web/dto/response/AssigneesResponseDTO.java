package com.issuetracker.web.dto.response;

import com.issuetracker.web.dto.vo.Assignee;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor
public class AssigneesResponseDTO {

    private final List<Assignee> assignees;
}
