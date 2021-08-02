package com.codesquad.issuetracker.auth.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class GitHubUser {

    private String loginId;
    private String name;
}
