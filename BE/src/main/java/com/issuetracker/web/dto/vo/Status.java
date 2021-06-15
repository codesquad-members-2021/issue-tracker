package com.issuetracker.web.dto.vo;

import com.issuetracker.exception.InvalidSearchRequestException;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Status {

    OPEN("open"),
    CLOSE("close");

   private final String name;

    public static Boolean statusToBoolean(String status) {
        if (status.equals(OPEN.name)) {
            return true;
        }
        if (status.equals(CLOSE.name)) {
            return false;
        }
        throw new InvalidSearchRequestException();
    }
}
