package com.team11.issue.domain;

import com.team11.issue.dto.oauth.UserInfoDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(name, user.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", profileImage='" + profileImage + '\'' +
                ", accessToken='" + accessToken + '\'' +
                '}';
    }
}
