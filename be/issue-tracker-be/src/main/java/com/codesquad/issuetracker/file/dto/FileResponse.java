package com.codesquad.issuetracker.file.dto;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(of = {"id"})
@Builder
public class FileResponse {
    private long id;
    private String name;
    private String path;
}
