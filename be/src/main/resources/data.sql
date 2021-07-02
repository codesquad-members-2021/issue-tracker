-- -----------------------------------------------------
-- 데이터 `issue_tracker_db`.`user`
-- -----------------------------------------------------
insert into user (`id`, `name`, `avatar_url`) values (1, 'MJ', 'https://avatars.githubusercontent.com/u/16694346?v=4');
insert into user (`id`, `name`, `avatar_url`) values (2, 'Kyu', 'https://avatars.githubusercontent.com/u/59721293?v=4');
insert into user (`id`, `name`, `avatar_url`) values (16694346, 'MJbae', 'https://avatars.githubusercontent.com/u/16694346?v=4');

-- -----------------------------------------------------
-- 데이터 `issue_tracker_db`.`milestone`
-- -----------------------------------------------------
insert into milestone (`id`, `title`, `description`, `due_date`) values (1, 'API 구현 1단계', '이슈 관련 CRUD 작업', CURRENT_TIMESTAMP);
insert into milestone (`id`, `title`, `description`, `due_date`) values (2, '로그인 구현', 'OAuth와 JWT를 활용한 로그인 구현', CURRENT_TIMESTAMP);
insert into milestone (`id`, `title`, `description`, `due_date`) values (3, '인프라 구축', '배포 자동화 시스템 구축', CURRENT_TIMESTAMP);

-- -----------------------------------------------------
-- 데이터 `issue_tracker_db`.`issue`
-- -----------------------------------------------------
insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (1, '[BE] 이슈 조회', '조회 조건에 따른 이슈 조회', 1, CURRENT_TIMESTAMP, false, false, 1, 1, 1);
insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (2, '[BE] GitHub OAuth 활용', 'GitHub OAuth 활용하여 Access Token 획득 로직 구현', 2, CURRENT_TIMESTAMP, false, false, 2, 2, 2);

insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (3, '[BE] 이슈 생성', '이슈 제목, 내용 등에 따른 이슈 생성', 1, CURRENT_TIMESTAMP, false, false, 1, 1, 3);
insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (4, '[BE] JWT 적용', 'GitHub OAuth에 JWT 적용하여 클레임 토큰 기반 로그인 유저 정보 관리', 2, CURRENT_TIMESTAMP, false, false, 2, 2, 4);

insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (5, '[BE] 이슈 삭제', '이슈 속성 중 deleted의 값을 true로 변경', 1, CURRENT_TIMESTAMP, false, false, 1, 1, 5);
insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (6, '[BE] 인터셉터 설정 적용', '인터셉터 적용하여 로그인 권한이 필요한 API 사용 시 유효한 JWT 요청하도록 구현', 2, CURRENT_TIMESTAMP, false, false, 2, 2, 6);

insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (7, '[BE] 인프라 기본 구성', 'Web Server + WAS + DB Server', 1, CURRENT_TIMESTAMP, false, false, 3, 1, 7);
insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (8, '[BE] 자동 배포 시스템 구축', '자동배포 스크립트 + 슬랙 알람', 2, CURRENT_TIMESTAMP, false, false, 3, 2, 8);
insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (9, '[BE] CI/CD 구축', 'GitHub Action 활용하여 CI/CD 구현', 2, CURRENT_TIMESTAMP, false, false, 3, 2, 9);
insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`)
values (10, '마일스톤,담당자가 연결되어 있지 않은 이슈', '내용 없음', null, CURRENT_TIMESTAMP, false, false, null, 2, 10);
-- -----------------------------------------------------
-- 데이터 `issue_tracker_db`.`label`
-- -----------------------------------------------------
insert into label (id, title, description, color_code)
VALUES (1, 'BE', '백엔드 작업', '#FCD1D1');
insert into label (id, title, description, color_code)
VALUES (2, 'refactor', '리팩토링 필요', '#ECE2E1');
insert into label (id, title, description, color_code)
VALUES (3, 'FE', '웹 프런트 작업', '#D3E0DC');
insert into label (id, title, description, color_code)
VALUES (4, 'Bug', '버그 해결 필', '#AEE1E1');
insert into label (id, title, description, color_code)
VALUES (5, 'iOS', 'iOS 작업', '#FCD1D1');

-- -----------------------------------------------------
-- 데이터 `issue_tracker_db`.`issue_has_label`
-- -----------------------------------------------------
insert into issue_has_label (issue_id, label_id) VALUES (1, 1);
insert into issue_has_label (issue_id, label_id) VALUES (2, 1);
insert into issue_has_label (issue_id, label_id) VALUES (3, 1);
insert into issue_has_label (issue_id, label_id) VALUES (4, 1);
insert into issue_has_label (issue_id, label_id) VALUES (5, 1);
insert into issue_has_label (issue_id, label_id) VALUES (6, 1);
insert into issue_has_label (issue_id, label_id) VALUES (7, 1);
insert into issue_has_label (issue_id, label_id) VALUES (8, 1);
insert into issue_has_label (issue_id, label_id) VALUES (9, 1);


insert into issue_has_label (issue_id, label_id) VALUES (4, 2);
insert into issue_has_label (issue_id, label_id) VALUES (5, 2);
insert into issue_has_label (issue_id, label_id) VALUES (6, 2);

-- -----------------------------------------------------
-- 데이터 `issue_tracker_db`.`comment`
-- -----------------------------------------------------
insert into comment (description, created_time, issue_id, user_id)
values ('초기 개발 시 조회 조건을 1개씩만 받아서 처리하고 추후 다중 조건을 처리하도록 구현합시다', CURRENT_TIMESTAMP, 1, 1);
insert into comment (description, created_time, issue_id, user_id)
values ('동의합니다.', CURRENT_TIMESTAMP, 1, 2);
insert into comment (description, created_time, issue_id, user_id)
values ('야호.', CURRENT_TIMESTAMP, 1, 1);

-- -----------------------------------------------------
-- 데이터 `issue_tracker_db`.`selected_emoji`
-- -----------------------------------------------------
insert into selected_emoji (`id`, `:thumbs_up:`, `:heart_eyes:`, `issue_id`, `comment_id`, `user_id`)
values (1, false, false, 1, null, 1);
