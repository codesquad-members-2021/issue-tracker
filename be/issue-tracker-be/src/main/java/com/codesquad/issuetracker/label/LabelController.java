package com.codesquad.issuetracker.label;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
public class LabelController {

    @GetMapping("/labels")
    public Set<LabelResponse> getLabels() {
        return LabelDummyData.labelResponses();
    }
}
