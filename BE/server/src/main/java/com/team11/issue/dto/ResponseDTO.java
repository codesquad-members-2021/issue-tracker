package com.team11.issue.dto;

public class ResponseDTO {

    private final String status;

    public ResponseDTO(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}
