use issue_tracker;

insert into users(id,name,avatar_image)
values (unhex(replace('3eb62438-9604-45f9-a183-b838d2123793','-','')),'coco','http://sample.com');

insert into issue(writer,title,text,writing_time,status,milestone_id)
values (unhex(replace('3eb62438-9604-45f9-a183-b838d2123793','-','')),'제목','내용','2021-06-10 15:32:08','OPEN',null);