package com.issuetracker.web.dto.reqeust;

import com.issuetracker.web.dto.response.MilestoneDTO;
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

    public Long getMilestoneId() {
        return milestone.getId();
    }

    public boolean checkMilestoneId() {
        return milestone.getId() != null;
    }
}


