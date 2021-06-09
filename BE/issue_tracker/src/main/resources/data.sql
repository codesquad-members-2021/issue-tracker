-- user
insert into `user`(id, email, oauth_resource, password, profile_image, username) values
(1, "yeon@google.com", "Google", "1234", "프로필 이미지 url", "김나연");

-- milestone
insert into milestone(id, content, created_date, due_date, is_open, title) values
(1, "백엔드 1주차 마일스톤 내용", "2021-06-01", "2021-06-15", true, "BE 1주차");

-- issue
insert into issue(id, created_time, is_open, issue_number, title, milestone_id, writer_id) values
(1, "2021-06-10 21:00", true, 1, "이슈 제목1", 1, 1);


