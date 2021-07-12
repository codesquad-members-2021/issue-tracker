insert into label(background_color_code, text_color_code, description, `name`)
values ("#F47378", "#000000", "bug fix", "bug");
insert into label(background_color_code, text_color_code, description, `name`)
values ("#6BD089", "#000000", "new feature", "feature");
insert into label(background_color_code, text_color_code, description, `name`)
values ("#C785C8", "#000000", "new documentation", "documentation");

insert into milestone(created_date_time, modified_date_time, description, due_date, is_open, title)
values (now(), now(), "M1 마일스톤에 대한 설명", "2021-06-21", true, "M1");
insert into milestone(created_date_time, modified_date_time, description, due_date, is_open, title)
values (now(), now(), "M2 마일스톤에 대한 설명", "2021-06-21", true, "M2");
insert into milestone(created_date_time, modified_date_time, description, due_date, is_open, title)
values (now(), now(), "M3 마일스톤에 대한 설명", "2021-06-21", true, "M3");

insert into `user`(avatar_url, email, `name`, token, user_name)
values ('https://avatars.githubusercontent.com/u/63284310?v=4', 'eno@gmail.com', 'Jeong InHo', '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', 'eNoLJ');
insert into `user`(avatar_url, email, `name`, token, user_name)
values ('https://avatars.githubusercontent.com/u/68000537?v=4', 'jane@gmail.com', 'JiSun Lim', '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', 'janeljs');
insert into `user`(avatar_url, email, `name`, token, user_name)
values ('https://avatars.githubusercontent.com/u/68000537?v=4', 'zane@gmail.com', 'zane', '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', 'zane');

insert into issue(created_date_time, modified_date_time, is_open, title, author_id, milestone_id)
values (now(), now(), true, "이슈 1번", 1, 1);
insert into comment(created_date_time, modified_date_time, comment, user_id, issue_id)
values(now(), now(), "이슈 1번 내용", 1, 1);
insert into issue_assignees(issue_id, assignees_id)
values (1, 1);
insert into issue_assignees(issue_id, assignees_id)
values (1, 2);
insert into issue_labels(issues_id, labels_id)
value (1, 1);
insert into issue_labels(issues_id, labels_id)
value (1, 2);

insert into issue(created_date_time, modified_date_time, is_open, title, author_id, milestone_id)
values (now(), now(), true, "이슈 2번", 1, 2);
insert into comment(created_date_time, modified_date_time, comment, user_id, issue_id)
values(now(), now(), "이슈 2번 내용", 1, 2);
insert into issue_assignees(issue_id, assignees_id)
values (2, 1);
insert into issue_labels(issues_id, labels_id)
value (2, 1);
insert into issue_labels(issues_id, labels_id)
value (2, 2);
insert into issue_labels(issues_id, labels_id)
value (2, 3);

insert into issue(created_date_time, modified_date_time, is_open, title, author_id, milestone_id)
values (now(), now(), true, "이슈 3번", 1, 3);
insert into comment(created_date_time, modified_date_time, comment, user_id, issue_id)
values(now(), now(), "이슈 3번 내용", 1, 3);
insert into issue_assignees(issue_id, assignees_id)
values (3, 1);
insert into issue_assignees(issue_id, assignees_id)
values (3, 2);
insert into issue_labels(issues_id, labels_id)
value (3, 2);
insert into issue_labels(issues_id, labels_id)
value (3, 3);
