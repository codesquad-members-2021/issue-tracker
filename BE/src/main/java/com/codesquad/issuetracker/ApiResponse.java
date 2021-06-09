package com.codesquad.issuetracker;

public class ApiResponse<T> {

    private T data;

    private ApiResponse(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }

    public static <T> ApiResponse<T> ok(T data){
        return new ApiResponse(data);
    }
}
