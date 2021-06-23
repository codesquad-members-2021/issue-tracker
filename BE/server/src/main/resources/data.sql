-- table: user
-- 1
INSERT INTO user(access_token, email, name, profile_image) values (null,'yunhg95@gmail.com','malaheaven','https://avatars.githubusercontent.com/u/45054467?v=4');
-- 2
INSERT INTO user(access_token, email, name, profile_image) values (null,'kowoohyuk91@gmail.com','kowoohyuk','https://avatars.githubusercontent.com/u/45394360?v=4');
-- 3
INSERT INTO user(access_token, email, name, profile_image) values (null,null,'jihong21511','https://avatars.githubusercontent.com/u/54160574?v=4');
-- 4
INSERT INTO user(access_token, email, name, profile_image) values (null,'xzxking17@gmail.com','17-sss','https://avatars.githubusercontent.com/u/33610315?v=4');
-- 5
INSERT INTO user(access_token, email, name, profile_image) values (null,null,'jhpark-ZG','https://avatars.githubusercontent.com/u/64049682?v=4');
-- 6
INSERT INTO user(access_token, email, name, profile_image) values (null,null,'pss327','https://avatars.githubusercontent.com/u/29851402?v=4');
-- 7
-- INSERT INTO user(access_token, email, name, profile_image) values (null,null,'choitree','https://avatars.githubusercontent.com/u/45054467?v=4');


-- table: milestone
-- 1
INSERT INTO milestone(title, dead_line_date, description) values ('코쿼 마지막 날','2021-06-25','코드스쿼드의 마지막 날 입니다.');
-- 2
INSERT INTO milestone(title, dead_line_date, description) values ('6월의 마지막 날','2021-06-30','6월의 마지막 날 입니다.');


-- table: label
-- 1
INSERT INTO label(title, description, color, bg_color) values ('BE','BE label 입니다','#FFFFFF','#d73a4a');
-- 2
INSERT INTO label(title, description, color, bg_color) values ('feature' ,'feature label 입니다','#FFFFFF','#cfd3d7');


-- table: issue
-- 1
INSERT INTO issue(title, contents, user_id, milestone_id) values ('dummy data 만들기','dummy data 만들기',1,1);
INSERT INTO history(user_id, history_date_time, flag, issue_id) values (1, now(), 'write', 1);
-- 2
INSERT INTO issue(title, contents, user_id, milestone_id) values ('배포하기','이슈 트래커를 배포합니다',1,2);
INSERT INTO history(user_id, history_date_time, flag, issue_id) values (1, now(), 'write', 2);

-- 3
INSERT INTO issue(title, contents, user_id, milestone_id, is_open) values ('api 만들기','이슈 트래커 api를 개발합니다',1,1,0);
INSERT INTO history(user_id, history_date_time, flag, issue_id) values (1, now(), 'closed', 3);

-- 4
INSERT INTO issue(title, contents, user_id, milestone_id, is_open, is_delete) values ('oauth 구현하기','ouath를 구현합니다',1,null,0,1);
INSERT INTO history(user_id, history_date_time, flag, issue_id) values (1, now(), 'delete', 4);

-- table: issue_has_label
-- issue 1
INSERT INTO issue_has_label(issue_id, label_id) values (1,1);
INSERT INTO issue_has_label(issue_id, label_id) values (1,2);

-- issue 2
INSERT INTO issue_has_label(issue_id, label_id) values (2,1);
INSERT INTO issue_has_label(issue_id, label_id) values (2,2);

-- table: assignees
-- issue 1
INSERT INTO assignees(issue_id, user_id) values (1,1);
INSERT INTO assignees(issue_id, user_id) values (1,2);
INSERT INTO assignees(issue_id, user_id) values (1,3);
INSERT INTO assignees(issue_id, user_id) values (1,4);
INSERT INTO assignees(issue_id, user_id) values (1,5);
INSERT INTO assignees(issue_id, user_id) values (1,6);

-- issue 2
INSERT INTO assignees(issue_id, user_id) values (2,1);
INSERT INTO assignees(issue_id, user_id) values (2,2);
INSERT INTO assignees(issue_id, user_id) values (2,3);
INSERT INTO assignees(issue_id, user_id) values (2,4);
INSERT INTO assignees(issue_id, user_id) values (2,5);
INSERT INTO assignees(issue_id, user_id) values (2,6);

-- issue 3
INSERT INTO assignees(issue_id, user_id) values (3,1);
-- issue 4
INSERT INTO assignees(issue_id, user_id) values (4,1);


-- table: comment
-- issue 1
INSERT INTO comment(contents, issue_id, user_id, create_date_time) values ('데이터는 언제 넣어주시나요?',1,2,now());

-- issue 1
INSERT INTO comment(contents, issue_id, user_id, create_date_time) values ('배포는 언제 해주시나요?',2,2,now());
