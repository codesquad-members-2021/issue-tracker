package team02.issue_tracker.exception_handler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import team02.issue_tracker.dto.ApiResult;
import team02.issue_tracker.oauth.exception.IncorrectTokenTypeException;
import team02.issue_tracker.oauth.exception.JwtNotFoundException;

@RestControllerAdvice
public class GlobalExceptionHanlder {

    @ExceptionHandler(IncorrectTokenTypeException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResult incorrectTokenTypeException(IncorrectTokenTypeException e) {
        return ApiResult.fail(e);
    }

    @ExceptionHandler(JwtNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiResult jwtNotFoundException(JwtNotFoundException e) {
        return ApiResult.fail(e);
    }
}
