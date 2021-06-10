package team02.issue_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class DataResponse<T> {

    private List<T> data;
}
