package com.team11.issue.dto;

import lombok.Getter;

@Getter
public class ResponseDTO {

    private final String status;

    public ResponseDTO(String status) {
        this.status = status;
    }
}
