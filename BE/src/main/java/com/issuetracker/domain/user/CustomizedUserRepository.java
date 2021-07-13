package com.issuetracker.domain.user;

import java.util.List;

public interface CustomizedUserRepository {

    List<User> findAuthors();
}
