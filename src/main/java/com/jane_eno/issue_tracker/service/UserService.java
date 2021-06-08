package com.jane_eno.issue_tracker.service;

import com.jane_eno.issue_tracker.web.dto.response.UserResponseDTO;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public UserResponseDTO login(String code) {
        return new UserResponseDTO("Jeong Inho", "derosatam76@gmail.com", "eNoLJ", "tokentoken");
    }

    public void logout(String authorization) {
    }
}
