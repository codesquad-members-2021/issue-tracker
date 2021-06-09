package com.codesqaude.cocomarco.domain.issue;

import com.codesqaude.cocomarco.domain.user.User;

import javax.persistence.*;

@Entity
public class Assignment {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Issue issue;

    @ManyToOne
    private User user;
}
