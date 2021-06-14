package com.codesquad.issuetracker.file.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data(staticConstructor = "from")
public class FileResponseWrapper {

    @JsonProperty("file")
    private final FileResponse fileResponse;
}
