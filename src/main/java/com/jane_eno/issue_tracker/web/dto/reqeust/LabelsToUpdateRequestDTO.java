package com.jane_eno.issue_tracker.web.dto.reqeust;

import com.jane_eno.issue_tracker.web.dto.response.LabelDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;
import java.util.stream.Collectors;

@Setter
@Getter
@ToString
@NoArgsConstructor
public class LabelsToUpdateRequestDTO {

    private List<LabelDTO> labels;
}
