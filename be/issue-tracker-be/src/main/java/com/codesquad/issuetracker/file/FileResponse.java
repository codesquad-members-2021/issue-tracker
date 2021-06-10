package com.codesquad.issuetracker.file;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FileResponse {
    private long id;
    private String name;
    private String path;
}
