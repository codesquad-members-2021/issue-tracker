package com.team11.issue.domain;

import com.team11.issue.dto.oauth.UserInfoDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;

    private String email;

    private String profileImage;

    private String accessToken;

    public User(UserInfoDTO userInfoDTO, String accessToken) {
        this.id = id;
        this.name = userInfoDTO.getName();
        this.email = userInfoDTO.getEmail();
        this.profileImage = userInfoDTO.getProfileImage();
        this.accessToken = accessToken;
    }

    public void updateUser(String accessToken) {
        this.accessToken = accessToken;
    }

    public void removeAccessToken() {
        this.accessToken = null;
    }

}
