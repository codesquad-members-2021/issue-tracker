package com.codesquad.issuetracker.file;

import lombok.Data;

@Data(staticConstructor = "from")
public class FileResponseWrapper {
    private final FileResponse file;
}
