INSERT INTO `user` (`name`, login_id)
VALUES ("bibi", "bibi6666667"),
       ("woody", "jihye-woo");

INSERT INTO `milestone` (title, content, due_date, opened_issue, closed_issue)
VALUES ("milestone title 1", "milestone content 1", NOW(), 0, 0);

INSERT INTO `issue` (title, status, created_at, content, milestone_id, user_id)
VALUES ("title1", true, NOW(), "content1", NULL, 1);

INSERT INTO `comment` (content, created_at, issue_id, user_id)
VALUES ("comment content 1", NOW(), 1, 1);

INSERT INTO `label` (title, content, color)
VALUES ("label title 1", "label content 1", "FFFFFF");

INSERT INTO `assignee` (issue_id, user_id)
VALUES (1, 1),
       (1, 2);
