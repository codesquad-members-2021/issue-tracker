insert into label(background_color_code, text_color_code, description, `name`)
values ("#F47378", "#000000", "bug fix", "bug");
insert into label(background_color_code, text_color_code, description, `name`)
values ("#6BD089", "#000000", "new feature", "feature");
insert into label(background_color_code, text_color_code, description, `name`)
values ("#C785C8", "#000000", "new documentation", "documentation");

insert into milestone(created_date_time, description, due_date, title)
values (now(), "M1 마일스톤에 대한 설명", "2021-06-21", "M1");
insert into milestone(created_date_time, description, due_date, title)
values (now(), "M2 마일스톤에 대한 설명", "2021-06-21", "M2");
insert into milestone(created_date_time, description, due_date, title)
values (now(), "M3 마일스톤에 대한 설명", "2021-06-21", "M3");

insert into `user`(avatar_url, email, `name`, token, user_name)
values ('https://avatars.githubusercontent.com/u/63284310?v=4', null, 'Jeong InHo', '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', 'eNoLJ');
