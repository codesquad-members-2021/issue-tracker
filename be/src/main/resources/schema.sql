-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema issue_tracker_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema issue_tracker_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `issue_tracker_db`;
CREATE SCHEMA IF NOT EXISTS `issue_tracker_db` DEFAULT CHARACTER SET = utf8mb4;
USE `issue_tracker_db`;

-- -----------------------------------------------------
-- Table `issue_tracker_db`.`milestone`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue_tracker_db`.`milestone`;

CREATE TABLE IF NOT EXISTS `issue_tracker_db`.`milestone`
(
    `id`          INT         NOT NULL AUTO_INCREMENT,
    `title`       VARCHAR(45) NOT NULL,
    `description` VARCHAR(45) NULL,
    `due_date`    DATE        NULL,
    `closed`      TINYINT(1)  NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `issue_tracker_db`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue_tracker_db`.`user`;

CREATE TABLE IF NOT EXISTS `issue_tracker_db`.`user`
(
    `id`         INT          NOT NULL,
    `name`       VARCHAR(45)  NOT NULL,
    `avatar_url` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `issue_tracker_db`.`issue`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue_tracker_db`.`issue`;

CREATE TABLE IF NOT EXISTS `issue_tracker_db`.`issue`
(
    `id`             INT          NOT NULL AUTO_INCREMENT,
    `title`          VARCHAR(255) NOT NULL,
    `description`    TEXT         NULL,
    `assignee`       INT          NULL,
    `created_time`   DATETIME     NOT NULL,
    `closed`         TINYINT      NOT NULL DEFAULT 0,
    `deleted`        TINYINT      NOT NULL DEFAULT 0,
    `milestone_id`   INT          NOT NULL,
    `author_user_id` INT          NOT NULL,
    `number`         INT          NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_issue_milestone1_idx` (`milestone_id` ASC),
    INDEX `fk_issue_user1_idx` (`author_user_id` ASC),
    CONSTRAINT `fk_issue_milestone1`
        FOREIGN KEY (`milestone_id`)
            REFERENCES `issue_tracker_db`.`milestone` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_issue_user1`
        FOREIGN KEY (`author_user_id`)
            REFERENCES `issue_tracker_db`.`user` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8mb4;
-- -----------------------------------------------------
-- Table `issue_tracker_db`.`label`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue_tracker_db`.`label`;

CREATE TABLE IF NOT EXISTS `issue_tracker_db`.`label`
(
    `id`          INT          NOT NULL AUTO_INCREMENT,
    `title`       VARCHAR(20)  NOT NULL,
    `description` VARCHAR(255) NULL,
    `color_code`  VARCHAR(10)  NOT NULL,
    `text_color`  VARCHAR(45)  NOT NULL DEFAULT 'black',
    PRIMARY KEY (`id`),
    UNIQUE INDEX `color_code_UNIQUE` (`color_code` ASC)
)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `issue_tracker_db`.`comment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue_tracker_db`.`comment`;

CREATE TABLE IF NOT EXISTS `issue_tracker_db`.`comment`
(
    `id`           INT      NOT NULL AUTO_INCREMENT,
    `issue_id`     INT      NOT NULL,
    `description`  TEXT     NOT NULL,
    `created_time` DATETIME NOT NULL,
    `user_id`      INT      NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_comment_issue1_idx` (`issue_id` ASC),
    INDEX `fk_comment_user1_idx` (`user_id` ASC),
    CONSTRAINT `fk_comment_issue1`
        FOREIGN KEY (`issue_id`)
            REFERENCES `issue_tracker_db`.`issue` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_comment_user1`
        FOREIGN KEY (`user_id`)
            REFERENCES `issue_tracker_db`.`user` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `issue_tracker_db`.`emoji`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue_tracker_db`.`emoji`;

CREATE TABLE IF NOT EXISTS `issue_tracker_db`.`emoji`
(
    `id`         INT         NOT NULL AUTO_INCREMENT,
    `code`       VARCHAR(10) NOT NULL,
    `count`      INT         NOT NULL DEFAULT 1,
    `comment_id` INT         NOT NULL,
    `issue_id`   INT         NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_emoji_comment1_idx` (`comment_id` ASC),
    INDEX `fk_emoji_issue1_idx` (`issue_id` ASC),
    UNIQUE INDEX `code_UNIQUE` (`code` ASC),
    CONSTRAINT `fk_emoji_comment1`
        FOREIGN KEY (`comment_id`)
            REFERENCES `issue_tracker_db`.`comment` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_emoji_issue1`
        FOREIGN KEY (`issue_id`)
            REFERENCES `issue_tracker_db`.`issue` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `issue_tracker_db`.`issue_has_label`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue_tracker_db`.`issue_has_label`;

CREATE TABLE IF NOT EXISTS `issue_tracker_db`.`issue_has_label`
(
    `issue_id` INT NOT NULL,
    `label_id` INT NOT NULL,
    PRIMARY KEY (`issue_id`, `label_id`),
    INDEX `fk_issue_has_label_label1_idx` (`label_id` ASC),
    INDEX `fk_issue_has_label_issue1_idx` (`issue_id` ASC),
    CONSTRAINT `fk_issue_has_label_issue1`
        FOREIGN KEY (`issue_id`)
            REFERENCES `issue_tracker_db`.`issue` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_issue_has_label_label1`
        FOREIGN KEY (`label_id`)
            REFERENCES `issue_tracker_db`.`label` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `issue_tracker_db`.`image`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue_tracker_db`.`image`;

CREATE TABLE IF NOT EXISTS `issue_tracker_db`.`image`
(
    `id`         INT           NOT NULL AUTO_INCREMENT,
    `url`        VARCHAR(2083) NOT NULL,
    `comment_id` INT           NOT NULL,
    `issue_id`   INT           NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_image_comment1_idx` (`comment_id` ASC),
    INDEX `fk_image_image1_idx` (`issue_id` ASC),
    CONSTRAINT `fk_image_comment1`
        FOREIGN KEY (`comment_id`)
            REFERENCES `issue_tracker_db`.`comment` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_image_image1`
        FOREIGN KEY (`issue_id`)
            REFERENCES `issue_tracker_db`.`issue` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8mb4;

SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;
