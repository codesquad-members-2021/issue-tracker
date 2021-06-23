package com.issuetracker.domain.elasticsearch;

import com.issuetracker.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class UserDocument {

    @Id
    private Long id;
    private String name;
    private String email;
    private String userName;
    private String avatarUrl;
    private String token;

    public static UserDocument of(User user) {
        return UserDocument.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .userName(user.getUserName())
                .avatarUrl(user.getAvatarUrl())
                .token(user.getToken())
                .build();
    }

    public static List<UserDocument> usersToUserDocuments(List<User> users) {
        return users.stream()
                .map(UserDocument::of)
                .collect(Collectors.toList());
    }
}
