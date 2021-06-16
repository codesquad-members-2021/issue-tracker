package com.team11.issue.domain;

import com.team11.issue.dto.oauth.UserInfoDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;

    private String email;

    private String profileImage;

    private String accessToken;

    @OneToMany(mappedBy = "user")
    private List<Assignees> assignees = new ArrayList<>();

    public static User createUser(UserInfoDTO userInfoDTO, String accessToken) {
        return User.builder()
                .name(userInfoDTO.getName())
                .email(userInfoDTO.getEmail())
                .profileImage(userInfoDTO.getProfileImage())
                .accessToken(accessToken)
                .build();
    }

    public void updateUser(String accessToken) {
        this.accessToken = accessToken;
    }

    public void removeAccessToken() {
        this.accessToken = null;
    }

}
