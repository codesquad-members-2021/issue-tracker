package team02.issue_tracker.dto.wrapping_dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class DataResponse<T> {

    private T data;
}
