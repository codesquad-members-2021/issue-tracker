package com.codesquad.issuetracker.label;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LabelController {

    @GetMapping("/labels")
    public LabelResponses readAll() {
        return LabelDummyData.labelResponses();
    }

    @GetMapping("/labels-count")
    public LabelsCountResponseWrapper readAllCount() {
        return LabelsCountResponseWrapper.from(LabelDummyData.labelsCountResponses());
    }
}
