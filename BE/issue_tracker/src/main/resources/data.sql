-- user
insert into `user`(id, email, oauth_resource, profile_image, username)
values (1, null, "GITHUB", "https://avatars.githubusercontent.com/u/65011131?v=4", "kimnayeon0108");
insert into `user`(id, email, oauth_resource, profile_image, username)
values (2, "ehdrhelr@gmail.com", "GITHUB", "프로필 이미지 url", "shion");

-- milestone
insert into milestone(id, content, created_date, due_date, is_open, title, is_deleted)
values (1, "백엔드 1주차 마일스톤 내용", "2021-06-01", "2021-06-15", false, "BE 1주차", false),
       (2, "백엔드 2주차 마일스톤 내용", "2021-06-14", "2021-06-30", true, "BE 2주차", false),
       (3, "백엔드 3주차 마일스톤 내용", "2021-06-15", "2021-06-30", true, "BE 3주차", false);

-- issue
insert into issue(id, created_time, is_open, title, writer_id, milestone_id, is_deleted)
values (1, CURRENT_TIMESTAMP, true, "이슈 제목1", 1, 1, false),
       (2, CURRENT_TIMESTAMP, true, "이슈 제목2", 1, 1, false),
       (3, CURRENT_TIMESTAMP, true, "이슈 제목2", 1, 2, false),
       (4, CURRENT_TIMESTAMP, false, "이슈 제목2", 2, 2, false),
       (5, CURRENT_TIMESTAMP, false, "이슈 제목2", 2, 3, true);

-- label
insert into label(id, title, content, color, is_deleted)
values (1, "BE", "백엔드 라벨", "#3DDCFF", false),
       (2, "FE", "프론트엔드 라벨", "#3DDCFF", true),
       (3, "iOS", "iOS 라벨", "#3DDCFF", false);

-- issue_label
insert into issue_label(issue_id, label_id)
values (1, 1),
       (2, 1);

-- issue_assignee
insert into issue_assignee(issue_id, user_id)
values (1, 2),
       (1, 1),
       (3, 2),
       (4, 2),
       (5, 2);

-- comment
insert into comment(id, content, file, created_time, issue_id, writer_id, is_deleted)
values (1, "코멘트1", "file url", CURRENT_TIMESTAMP, 1, 1, false),
       (2, "코멘트2", "file url", CURRENT_TIMESTAMP, 1, 1, false),
       (3, "코멘트3", "file url", CURRENT_TIMESTAMP, 3, 1, false),
       (4, "코멘트4", "file url", CURRENT_TIMESTAMP, 2, 1, false),
       (5, "코멘트5", "file url", CURRENT_TIMESTAMP, 4, 1, false),
       (6, "코멘트6", "file url", CURRENT_TIMESTAMP, 2, 1, false),
       (7, "코멘트7", "file url", CURRENT_TIMESTAMP, 3, 1, false);


-- emoji
insert into emoji(id, `name`, is_deleted)
values (1, ":happy_face", false),
       (2, ":surprise_face", false),
       (3, ":heart", false),
       (4, ":sun", false),
       (5, ":cloud", false),
       (6, ":gold_medal", false),
       (7, ":honux", false),
       (8, ":tears", false),
       (9, ":thumb_up", false),
       (10, ":fire", false);

-- -- comment_emoji
-- insert into comment_emoji(comment_id, emoji_id)
-- values (1, 1);
