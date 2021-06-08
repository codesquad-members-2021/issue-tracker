package com.jane_eno.issue_tracker.web.dto.reqeust;

import lombok.*;

import java.util.List;

@Setter
@NoArgsConstructor
public class IssueNumbersRequestDTO {

    private List<Integer> issueNumbers;
}
