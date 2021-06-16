package com.codesqaude.cocomarco.domain.user.dto;

import com.codesqaude.cocomarco.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class UserWrapper {
    private List<User> user;
}
