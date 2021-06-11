package com.jane_eno.issue_tracker.web.dto.response;

import com.jane_eno.issue_tracker.web.dto.response.vo.Assignee;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor
public class AssigneesResponseDTO {

    private final List<Assignee> assignees;
}
