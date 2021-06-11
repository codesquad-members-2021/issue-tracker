package com.codesquad.issuetracker.user;

import com.codesquad.issuetracker.comment.StaticConstructorNames;
import lombok.Data;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Data(staticConstructor = StaticConstructorNames.SINGLE_PARAMETER)
public class UserResponses {
    private final Set<UserResponse> userResponses;

    public static UserResponses from(Collection<UserResponse> userResponses) {
        return new UserResponses(new HashSet<>(userResponses));
    }
}
