package com.codesquad.issuetracker.response;

public class ApiResponse<T> {

    private T data;

    private ApiResponse() {

    }

    private ApiResponse(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }

    public static <T> ApiResponse<T> ok(T data){
        return new ApiResponse(data);
    }
    public static <T> ApiResponse<T> ok(){
        return new ApiResponse();
    }
}
