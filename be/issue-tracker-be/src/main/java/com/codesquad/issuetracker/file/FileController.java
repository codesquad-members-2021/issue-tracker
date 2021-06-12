package com.codesquad.issuetracker.file;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
public class FileController {

    @PostMapping(value = "/files", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public FileResponseWrapper createOne(MultipartFile file) {
        if (file == null) {
            throw new MultipartFileNotFoundException();
        }

        return FileResponseWrapper.from(FileDummyData.imageFileResponse());
    }
}
