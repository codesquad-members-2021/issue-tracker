package com.issuetracker.web.dto.vo;

import com.issuetracker.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class Author {

    private final Long id;
    private final String image;
    private final String userName;

    public static Author of(User user) {
        return Author.builder()
                .id(user.getId())
                .image(user.getAvatarUrl())
                .userName(user.getUserName())
                .build();
    }
}
