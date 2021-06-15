//package com.team11.issue.domain;
//
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//import javax.persistence.*;
//
//@Getter
//@NoArgsConstructor
//@Entity
//public class Comment {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(length = 100)
//    private String contents;
//
//    @ManyToOne
//    @JoinColumn(foreignKey = @ForeignKey(name = "fk_issue_comment"))
//    private Issue issue;
//
//    @OneToOne
//    @JoinColumn(foreignKey = @ForeignKey(name = "fk_user_comment"))
//    private User user;
//}
