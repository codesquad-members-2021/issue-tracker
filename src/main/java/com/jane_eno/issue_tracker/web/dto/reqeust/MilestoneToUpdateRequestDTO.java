package com.jane_eno.issue_tracker.web.dto.reqeust;

import com.jane_eno.issue_tracker.web.dto.response.MilestoneDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
public class MilestoneToUpdateRequestDTO {

    private MilestoneDTO milestone;
}


