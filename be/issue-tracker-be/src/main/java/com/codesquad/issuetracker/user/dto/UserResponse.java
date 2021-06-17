package com.codesquad.issuetracker.user.dto;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(of = {"id"})
@Builder
public class UserResponse {
    private long id;
    private String email;
    private String name;
    private String profileImage;
}
