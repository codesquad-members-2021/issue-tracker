package com.issuetracker.web.dto.response;

import com.issuetracker.web.dto.vo.Author;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor
public class AuthorsResponseDTO {

    private final List<Author> authors;
}
