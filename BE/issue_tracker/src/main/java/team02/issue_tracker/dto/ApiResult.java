package team02.issue_tracker.dto;

import lombok.Getter;

@Getter
public class ApiResult<T> {
    private T data;
    private String error;

    private ApiResult(T data, String error) {
        this.data = data;
        this.error = error;
    }

    public static <T> ApiResult<T> success(T data) {
        return new ApiResult<>(data, null);
    }

    public static ApiResult<Void> fail(String errorMessage) {
        return new ApiResult<>(null, errorMessage);
    }

    public static ApiResult<Void> fail(Throwable cause) {
        return fail(cause.getMessage());
    }

    public static ApiResult<String> ok() {
        return success("OK");
    }
}
