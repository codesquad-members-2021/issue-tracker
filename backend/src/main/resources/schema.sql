use
issue_tracker;

drop TABLE IF EXISTS assignment;
drop TABLE IF EXISTS comment;
drop TABLE IF EXISTS issue_label;
drop TABLE IF EXISTS label;
drop TABLE IF EXISTS issue;
drop TABLE IF EXISTS users;
drop TABLE IF EXISTS milestone;


create table users
(
    id           BINARY(16) primary key,
    github_id bigint,
    name         varchar(45),
    email         varchar(100),
    avatar_image varchar(45)
);

create table milestone
(
    id        bigint primary key auto_increment,
    title     varchar(45),
    detail    varchar(45),
    dead_line date
);

create table issue
(
    id           bigint primary key auto_increment,
    title        varchar(45),
    text         varchar(500),
    status       varchar(10),
    writing_time DATETIME,
    milestone_id bigint,
    writer       BINARY(16),
    foreign key (milestone_id) references milestone (id),
    foreign key (writer) references users (id)
);

create table assignment
(
    id       bigint primary key auto_increment,
    issue_id bigint,
    user_id  BINARY(16),
    foreign key (issue_id) references issue (id),
    foreign key (user_id) references users (id)
);

create table comment
(
    id           bigint primary key auto_increment,
    issue_id     bigint,
    writing_time DATETIME,
    text         varchar(500),
    writer       BINARY(16),
    foreign key (issue_id) references issue (id),
    foreign key (writer) references users (id)
);

create table label
(
    id       bigint primary key auto_increment,
    title    varchar(45),
    detail   varchar(100),
    hex_code varchar(45)
);

create table issue_label
(
    id       bigint primary key auto_increment,
    issue_id bigint,
    label_id bigint,
    foreign key (issue_id) references issue (id),
    foreign key (label_id) references label (id)
);
