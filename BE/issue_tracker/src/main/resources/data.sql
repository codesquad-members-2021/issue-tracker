-- -- user
-- insert into `user`(id, email, oauth_resource, profile_image, username)
-- values (1, null, "GITHUB", "https://avatars.githubusercontent.com/u/65011131?v=4", "Kim nayeon");
-- insert into `user`(id, email, oauth_resource, profile_image, username)
-- values (2, "ehdrhelr@gmail.com", "GITHUB", "프로필 이미지 url", "shion");
--
-- -- milestone
-- insert into milestone(id, content, created_date, due_date, is_open, title, is_deleted)
-- values (1, "백엔드 1주차 마일스톤 내용", "2021-06-01", "2021-06-15", true, "BE 1주차", false),
--        (2, "백엔드 2주차 마일스톤 내용", "2021-06-14", "2021-06-30", true, "BE 2주차", false);
--
-- -- issue
-- insert into issue(id, created_time, is_open, title, writer_id, milestone_id, is_deleted)
-- values (1, CURRENT_TIMESTAMP, true, "이슈 제목1", 1, 1, false),
--        (2, CURRENT_TIMESTAMP, true, "이슈 제목2", 2, 1, true);
--
-- -- label
-- insert into label(id, title, content, color, is_deleted)
-- values (1, "BE", "백엔드 라벨", "#3DDCFF", false),
--        (2, "FE", "프론트엔드 라벨", "#3DDCFF", true),
--        (3, "iOS", "iOS 라벨", "#3DDCFF", false);
--
-- -- issue_label
-- insert into issue_label(issue_id, label_id)
-- values (1, 1);
--
-- -- issue_assignee
-- insert into issue_assignee(issue_id, user_id)
-- values (1, 1);
--
-- -- comment
-- insert into comment(id, content, file, created_time, issue_id, writer_id, is_deleted)
-- values (1, "good", "file url", CURRENT_TIMESTAMP, 1, 1, false),
--        (2, "nice", "file url", CURRENT_TIMESTAMP, 1, 2, true);
--
--
-- emoji
insert
into emoji(id, `name`, is_deleted)
values (1, ":happy face", false),
       (2, ":surprise face", false);

-- -- comment_emoji
-- insert into comment_emoji(comment_id, emoji_id)
-- values (1, 1);
