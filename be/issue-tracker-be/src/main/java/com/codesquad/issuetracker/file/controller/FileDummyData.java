package com.codesquad.issuetracker.file.controller;

import com.codesquad.issuetracker.file.dto.FileResponse;

public class FileDummyData {
    private FileDummyData() {
    }

    public static FileResponse imageFileResponse() {
        return FileResponse.builder()
                       .id(1L)
                       .name("AI7.png")
                       .path("/images/AI7.png")
                       .build();
    }
}
