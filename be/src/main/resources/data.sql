-- -----------------------------------------------------
-- 데이터 `issue_tracker_db`.`user`
-- -----------------------------------------------------
insert into user (`id`, `name`, `avatar_url`) values (1, 'mj', 'https://avatars.githubusercontent.com/u/16694346?v=4');
insert into user (`id`, `name`, `avatar_url`) values (2, 'kyu', 'https://avatars.githubusercontent.com/u/59721293?v=4');

-- -----------------------------------------------------
-- 데이터 `issue_tracker_db`.`milestone`
-- -----------------------------------------------------
insert into milestone (`id`, `title`, `description`, `due_date`) values (1, 'API 구현 1단계', '이슈 전체 조회', CURRENT_TIMESTAMP);
insert into milestone (`id`, `title`, `description`, `due_date`) values (2, 'API 구현 2단계', '내용 없음', CURRENT_TIMESTAMP);

-- -----------------------------------------------------
-- 데이터 `issue_tracker_db`.`issue`
-- -----------------------------------------------------
insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (1, '[BE] 이슈 전체 조회 API 구현', '내용 없음', 1, CURRENT_TIMESTAMP, false, true, 1, 1, 1);
insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (2, '[BE] JWT 로직에 인터셉터 설정 적용', '내용 없음', 2, CURRENT_TIMESTAMP, false, true, 2, 2, 2);

-- -----------------------------------------------------
-- 데이터 `issue_tracker_db`.`label`
-- -----------------------------------------------------
insert into label (id, title, description, color_code, text_color)
VALUES (1, 'BE', '백엔드 라벨', '#fef2c0', 'black');
insert into label (id, title, description, color_code, text_color)
VALUES (2, 'feature', '기능', '#EAE0FD', 'black');

-- -----------------------------------------------------
-- 데이터 `issue_tracker_db`.`issue_has_label`
-- -----------------------------------------------------
insert into issue_has_label (issue_id, label_id) VALUES (1, 1);
insert into issue_has_label (issue_id, label_id) VALUES (1, 2);
