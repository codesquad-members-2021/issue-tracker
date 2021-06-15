package com.issuetracker.web.dto.reqeust;

import com.issuetracker.web.dto.vo.Assignee;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Setter
@Getter
@ToString
@NoArgsConstructor
public class AssigneesToUpdateRequestDTO {

    private List<Assignee> assignees;
}
