insert into user (`id`, `name`, `avatar_url`) values (1, 'mj', 'http://as.com');
insert into user (`id`, `name`, `avatar_url`) values (2, 'mj', 'http://as.com');

insert into milestone (`id`, `title`, `description`, `due_date`) values (1, 'titlehello', 'deschelo', CURRENT_TIMESTAMP);
insert into milestone (`id`, `title`, `description`, `due_date`) values (2, 'titlehello', 'deschelo', CURRENT_TIMESTAMP);

insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (1, 'test', 'testdes', 1, CURRENT_TIMESTAMP, false, true, 1, 1, 1);

insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (2, 'test', 'testdes', 2, CURRENT_TIMESTAMP, false, true, 2, 2, 2);
