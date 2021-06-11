package com.codesquad.issuetracker.file;

import com.codesquad.issuetracker.comment.StaticConstructorNames;
import lombok.Data;

@Data(staticConstructor = StaticConstructorNames.SINGLE_PARAMETER)
public class FileResponseWrapper {
    private final FileResponse file;
}
