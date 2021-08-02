package com.codesquad.issuetracker.domain.user.response;

import com.codesquad.issuetracker.domain.user.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserResponse {

    private Long id;

    private String name;

    @JsonProperty("login_id")
    private String loginId;

    public static UserResponse create(User user) {
        return new UserResponse(user.getId(), user.getName(), user.getLoginId());
    }

}
