package team02.issue_tracker.dto.wrapping_dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class ListDataResponse<T> {

    private List<T> data;
}
