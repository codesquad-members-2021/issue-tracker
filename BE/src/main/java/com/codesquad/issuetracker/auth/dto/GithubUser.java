package com.codesquad.issuetracker.auth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class GitHubUser {

    private String login;

    @JsonProperty("avatar_url")
    private String avatarUrl;

    private String name;
}
