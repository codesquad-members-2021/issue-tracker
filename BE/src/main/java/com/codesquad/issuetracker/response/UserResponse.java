package com.codesquad.issuetracker.response;

import com.codesquad.issuetracker.domain.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserResponse {

    private String name;

    @JsonProperty("login_id")
    private String loginId;

    public static UserResponse create(User user) {
        return new UserResponse(user.getName(), user.getLoginId());
    }

}
