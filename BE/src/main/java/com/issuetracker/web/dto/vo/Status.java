package com.issuetracker.web.dto.vo;

import com.issuetracker.exception.InvalidSearchRequestException;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Status {

    OPEN(true),
    CLOSE(false);

    private final boolean bool;

    public static boolean statusToBoolean(String status) {
        try {
            return Status.valueOf(status.toUpperCase()).bool;
        } catch (RuntimeException e) {
            throw new InvalidSearchRequestException();
        }
    }

    public String getName() {
        return this.toString().toLowerCase();
    }
}
