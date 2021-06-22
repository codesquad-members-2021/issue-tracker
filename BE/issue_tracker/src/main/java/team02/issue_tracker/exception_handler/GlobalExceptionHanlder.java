package team02.issue_tracker.exception_handler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import team02.issue_tracker.dto.ApiResult;
import team02.issue_tracker.exception.IllegalStatusException;
import team02.issue_tracker.exception.NotFoundException;
import team02.issue_tracker.oauth.exception.IncorrectTokenTypeException;
import team02.issue_tracker.oauth.exception.JwtNotFoundException;

@RestControllerAdvice
public class GlobalExceptionHanlder {

    @ExceptionHandler(IncorrectTokenTypeException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResult<Void> incorrectTokenTypeException(IncorrectTokenTypeException e) {
        return ApiResult.fail(e);
    }

    @ExceptionHandler(JwtNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiResult<Void> jwtNotFoundException(JwtNotFoundException e) {
        return ApiResult.fail(e);
    }

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiResult<Void> notFoundException(NotFoundException e) {
        return ApiResult.fail(e);
    }

    @ExceptionHandler(IllegalStatusException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResult<Void> illegalIssueStatusException(IllegalStatusException e) {
        return ApiResult.fail(e);
    }
}
