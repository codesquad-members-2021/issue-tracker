package com.codesquad.issuetracker.dto;

public class ApiResult<T> {

    private T data;
    private String error;

    private ApiResult(T data, String error) {
        this.data = data;
        this.error = error;
    }

    public static <T> ApiResult<T> ok(T data) {
        return new ApiResult<>(data, null);
    }

    public static ApiResult<?> fail(String errorMessage) {
        return new ApiResult<>(null, errorMessage);
    }

    public T getData() {
        return data;
    }

    public String getError() {
        return error;
    }
}
