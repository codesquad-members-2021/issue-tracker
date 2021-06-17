package com.issuetracker.dto;

public class ResponseStatusDto {
    private String status;

    public ResponseStatusDto(String status) {
        status = status;
    }

    public String getStatus() {
        return status;
    }
}

