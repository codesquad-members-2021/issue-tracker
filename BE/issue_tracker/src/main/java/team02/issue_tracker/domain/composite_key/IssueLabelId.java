package team02.issue_tracker.domain.composite_key;


import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class IssueLabelId implements Serializable {
    private Long issue;
    private Long label;
}
