package com.codesquad.issuetracker.domain.assignee.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AssigneeRequest {

    @JsonProperty("user_id")
    private Long userId;

}
