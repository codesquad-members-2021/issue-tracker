package com.codesquad.issuetracker.file;

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
