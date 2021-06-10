package com.codesquad.issuetracker.file;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
public class FileController {

    @PostMapping( "/files")
    public FileResponse createOne(MultipartFile file) {
        return FileDummyData.imageFileResponse();
    }
}
