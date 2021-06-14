package com.codesquad.issuetracker.user.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponse {
    private long id;
    private String email;
    private String name;
}
