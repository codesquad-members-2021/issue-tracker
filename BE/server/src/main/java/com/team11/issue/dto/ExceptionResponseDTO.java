package com.team11.issue.dto;

public class ExceptionResponseDTO {

    private String status;
    private String message;


    public ExceptionResponseDTO(String message) {
        this.status = "error";
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
}
