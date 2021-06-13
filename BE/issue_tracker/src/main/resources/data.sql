-- user
insert into `user`(id, email, oauth_resource, profile_image, username)
values (1, "yeon@google.com", "Google", "프로필 이미지 url", "yeon");
insert into `user`(id, email, oauth_resource, profile_image, username)
values (2, "ehdrhelr@gmail.com", "GITHUB", "프로필 이미지 url", "shion");

-- milestone
insert into milestone(id, content, created_date, due_date, is_open, title)
values (1, "백엔드 1주차 마일스톤 내용", "2021-06-01", "2021-06-15", true, "BE 1주차");

-- issue
insert into issue(id, created_time, is_open, issue_number, title, writer_id, milestone_id)
values (1, CURRENT_TIMESTAMP, true, 1, "이슈 제목1", 1, 1),
       (2, CURRENT_TIMESTAMP, false, 2, "이슈 제목2", 2, null);

-- label
insert into label(id, title, content, color)
values (1, "BE", "백엔드 라벨", "#3DDCFF");
insert into label(id, title, content, color)
values (2, "FE", "프론트엔드 라벨", "#3DDCFF");

-- issue_label
insert into issue_label(issue_id, label_id)
values (1, 1),
       (1, 2);

-- issue_assignee
insert into issue_assignee(issue_id, user_id)
values (1, 1),
       (1, 2);

-- comment
insert into comment(id, content, file, created_time, issue_id, writer_id)
values (1, "good", "file url", CURRENT_TIMESTAMP, 1, 1),
       (2, "nice", "file url", CURRENT_TIMESTAMP, 1, 2);


-- emoji
insert
into emoji(id, `name`)
values (1, ":happy face"),
       (2, ":surprise face");

-- comment_emoji
insert into comment_emoji(comment_id, emoji_id)
values (1, 1),
       (1, 2),
       (2, 1),
       (2, 2);
