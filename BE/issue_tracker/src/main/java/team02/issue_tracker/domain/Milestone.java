package team02.issue_tracker.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Milestone {
    @Id @GeneratedValue
    private Long id;

    private String title;
    private String content;
    private LocalDate createdDate;
    private LocalDate dueDate;
    private boolean isOpen;

    @OneToMany(mappedBy = "milestone")
    private List<Issue> issues = new ArrayList<>();
}
