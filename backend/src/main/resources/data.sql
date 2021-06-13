use
issue_tracker;

insert into users(id, name, avatar_image)
values (unhex(replace('3eb62438-9604-45f9-a183-b838d2123793', '-', '')), 'coco', 'http://sample.com');

insert into issue(writer, title, text, writing_time, status, milestone_id)
values (unhex(replace('3eb62438-9604-45f9-a183-b838d2123793', '-', '')), '제목', '내용', '2021-06-10 15:32:08', 'OPEN',
        null);

insert into milestone(title, detail, dead_line)
values ('마일스톤1', '마일스톤_디테일', '2099-12-25');

insert into label(title, detail, hex_code)
values ('라벨1', '라벨 디테일', '#ffffff');

insert into label(title, detail, hex_code)
values ('라벨2', '라벨 디테일2', '#ffffff');