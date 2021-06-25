INSERT INTO `user` (`name`, login_id)
VALUES ("bibi", "bibi6666667"),
       ("woody", "jihye-woo");

INSERT INTO `milestone` (title, content, due_date, opened_issue, closed_issue)
VALUES ("milestone title 1", "milestone content 1", NOW(), 0, 0),
       ("milestone title 2", "milestone content 2", NOW(), 0, 0);

INSERT INTO `issue` (title, status, created_at, content, milestone_id, user_id)
VALUES ("title1", true, NOW(), "content1", 1, 1),
       ("title2", false, NOW(), "content2", 1, 2),
       ("title3 blah", true, NOW(), "content3 blah", NULL, 1);

INSERT INTO `comment` (content, created_at, issue_id, user_id)
VALUES ("comment content 1", NOW(), 1, 1),
       ("comment content 2", NOW(), 1, 2),
       ("comment content 3", NOW(), 2, 1),
       ("comment content 4", NOW(), 3, 2);

INSERT INTO `label` (title, content, color)
VALUES ("label title 1", "label content 1", "FFFFFF"),
       ("label title 2", "label content 2", "FF0000"),
       ("label title 3", "label content 3", "FF0000"),
       ("label title 4", "label content 4", "FFFFFF");

INSERT INTO `assignee` (issue_id, user_id)
VALUES (1, 1),
       (1, 2),
       (2, 1),
       (3, 2);

INSERT INTO `issue_label` (issue_id, label_id)
VALUES (1, 1),
       (1, 2),
       (1, 3);
