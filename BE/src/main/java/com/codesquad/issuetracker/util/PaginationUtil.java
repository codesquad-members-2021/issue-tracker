package com.codesquad.issuetracker.util;


import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import javax.validation.constraints.Min;

public class PaginationUtil {

    public static Pageable descendingPageable(@Min(0) int page, @Min(1) int size, String sort) {
        return PageRequest.of(page, size, Sort.by(sort).descending());
    }

    public static Pageable descendingPageable(@Min(0) int page, @Min(1) int size) {
        return PageRequest.of(page, size);
    }
}
