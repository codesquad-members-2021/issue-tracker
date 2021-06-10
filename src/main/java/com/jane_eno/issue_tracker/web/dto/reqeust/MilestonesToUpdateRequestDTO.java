package com.jane_eno.issue_tracker.web.dto.reqeust;

import com.jane_eno.issue_tracker.web.dto.response.MilestoneDTO;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@ToString
@NoArgsConstructor
public class MilestonesToUpdateRequestDTO {

    private MilestoneDTO milestones;
}


