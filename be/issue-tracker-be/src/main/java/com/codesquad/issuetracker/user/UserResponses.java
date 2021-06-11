package com.codesquad.issuetracker.user;

import lombok.Data;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Data(staticConstructor = "from")
public class UserResponses {
    private final Set<UserResponse> userResponses;

    public static UserResponses from(Collection<UserResponse> userResponses) {
        return new UserResponses(new HashSet<>(userResponses));
    }
}
