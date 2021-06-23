package com.codesqaude.cocomarco.domain.oauth;

import com.codesqaude.cocomarco.domain.user.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class GitUserInfo implements UserInfo {

    private Long id;
    private String login;

    @JsonProperty("avatar_url")
    private String avatarUrl;
    private String email;

    public GitUserInfo(Long id, String login, String avatarUrl, String email) {
        this.id = id;
        this.login = login;
        this.avatarUrl = avatarUrl;
        this.email = email;
    }

    @Override
    public User toEntity() {
        return new User(login, avatarUrl, id, email);
    }
}

