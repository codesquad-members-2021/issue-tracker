package com.issuetracker.web.dto.reqeust;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchRequestDTO {

    private String status;
    private String query;
}
