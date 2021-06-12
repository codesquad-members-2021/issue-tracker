DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user
(
    id            INT AUTO_INCREMENT PRIMARY KEY,
    name          VARCHAR(100) UNIQUE KEY NOT NULL,
    email         VARCHAR(100),
    profile_image VARCHAR(255),
    access_token  VARCHAR(255)
) DEFAULT CHARSET = utf8;
