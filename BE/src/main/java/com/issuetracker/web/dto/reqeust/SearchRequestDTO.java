package com.issuetracker.web.dto.reqeust;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class SearchRequestDTO {

    private String status;
    private String author;
    private String assignee;
    private String commenter;
    private List<String> label;
    private String milestone;
}
