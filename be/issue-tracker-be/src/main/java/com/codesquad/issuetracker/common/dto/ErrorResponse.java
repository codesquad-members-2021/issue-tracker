package com.codesquad.issuetracker.common.dto;

import lombok.Builder;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;

import java.util.List;
import java.util.stream.Collectors;

@Data(staticConstructor = "of")
@Builder
public class ErrorResponse {
    private final int statusCode;
    private final String status;
    private final String message;
    private final List<String> errors;

    public static ErrorResponse of(HttpStatus status, List<FieldError> errors) {
        return new ErrorResponse(
                status.value(),
                status.name(),
                status.getReasonPhrase(),
                errors.stream()
                        .map(fieldError -> fieldError.getField() + ": " + fieldError.getDefaultMessage())
                        .collect(Collectors.toList())
        );
    }
}
