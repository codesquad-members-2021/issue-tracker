package com.issuetracker.web.dto.reqeust;

import lombok.*;

import java.util.List;

@Setter
@Getter
@ToString
@NoArgsConstructor
public class IssueNumbersRequestDTO {

    private List<Long> issueNumbers;
}
