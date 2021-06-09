package com.codesquad.issuetracker.label;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LabelController {

    @GetMapping("/labels")
    public List<LabelResponse> getLabels() {
        return LabelDummyData.labelResponses();
    }
}
