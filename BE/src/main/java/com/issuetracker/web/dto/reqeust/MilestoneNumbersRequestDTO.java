package com.issuetracker.web.dto.reqeust;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Setter
@Getter
@ToString
@NoArgsConstructor
public class MilestoneNumbersRequestDTO {

    private List<Long> milestoneNumbers;
}
