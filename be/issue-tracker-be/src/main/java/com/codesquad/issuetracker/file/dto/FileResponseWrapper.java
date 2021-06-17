package com.codesquad.issuetracker.file.dto;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Data;

@Data(staticConstructor = "from")
public class FileResponseWrapper {

    @JsonValue
    private final FileResponse fileResponse;
}
