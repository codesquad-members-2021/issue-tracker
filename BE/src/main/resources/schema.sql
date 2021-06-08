-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema issue-tracker
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `issue-tracker` ;
-- -----------------------------------------------------
-- Schema issue-tracker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `issue-tracker` DEFAULT CHARACTER SET utf8 ;
USE `issue-tracker` ;
-- -----------------------------------------------------
-- Table `issue-tracker`.`milestone`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue-tracker`.`milestone` ;
CREATE TABLE IF NOT EXISTS `issue-tracker`.`milestone` (
                                                           `id` INT NOT NULL AUTO_INCREMENT,
                                                           `title` VARCHAR(45) NOT NULL DEFAULT 'no title',
    `content` VARCHAR(45) NULL,
    `due_date` DATETIME NULL,
    `opened_issue` INT UNSIGNED NOT NULL DEFAULT 0,
    `closed_issue` INT UNSIGNED NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`))
    ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `issue-tracker`.`comment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue-tracker`.`comment` ;
CREATE TABLE IF NOT EXISTS `issue-tracker`.`comment` (
                                                         `id` INT NOT NULL AUTO_INCREMENT,
                                                         `content` VARCHAR(45) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `issue_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_comment_issue1_idx` (`issue_id` ASC) VISIBLE,
    CONSTRAINT `fk_comment_issue1`
    FOREIGN KEY (`issue_id`)
    REFERENCES `issue-tracker`.`issue` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `issue-tracker`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue-tracker`.`user` ;
CREATE TABLE IF NOT EXISTS `issue-tracker`.`user` (
                                                      `id` INT NOT NULL AUTO_INCREMENT,
                                                      `name` VARCHAR(45) NOT NULL DEFAULT 'Anonymous',
    `user_id` VARCHAR(45) NOT NULL,
    `comment_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `github_id_UNIQUE` (`user_id` ASC) VISIBLE,
    INDEX `fk_user_comment1_idx` (`comment_id` ASC) VISIBLE,
    CONSTRAINT `fk_user_comment1`
    FOREIGN KEY (`comment_id`)
    REFERENCES `issue-tracker`.`comment` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `issue-tracker`.`issue`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue-tracker`.`issue` ;
CREATE TABLE IF NOT EXISTS `issue-tracker`.`issue` (
                                                       `id` INT NOT NULL AUTO_INCREMENT,
                                                       `title` VARCHAR(45) NOT NULL DEFAULT 'no title',
    `status` TINYINT NOT NULL DEFAULT 1,
    `created_at` DATETIME NOT NULL,
    `content` VARCHAR(1000) NULL DEFAULT 'no contents',
    `milestone_id` INT NULL,
    `user_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_issue_milestone_idx` (`milestone_id` ASC) VISIBLE,
    INDEX `fk_issue_user1_idx` (`user_id` ASC) VISIBLE,
    CONSTRAINT `fk_issue_milestone`
    FOREIGN KEY (`milestone_id`)
    REFERENCES `issue-tracker`.`milestone` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_issue_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `issue-tracker`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `issue-tracker`.`label`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue-tracker`.`label` ;
CREATE TABLE IF NOT EXISTS `issue-tracker`.`label` (
                                                       `id` INT NOT NULL,
                                                       `title` VARCHAR(45) NOT NULL DEFAULT 'no title',
    `content` VARCHAR(45) NULL DEFAULT 'no contents',
    `color` CHAR(6) NOT NULL DEFAULT 'F0F8FF',
    PRIMARY KEY (`id`))
    ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `issue-tracker`.`assignee`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue-tracker`.`assignee` ;
CREATE TABLE IF NOT EXISTS `issue-tracker`.`assignee` (
                                                          `id` INT NOT NULL,
                                                          `issue_id` INT NOT NULL,
                                                          `user_id` INT NOT NULL,
                                                          PRIMARY KEY (`id`),
    INDEX `fk_assignee_issue1_idx` (`issue_id` ASC) VISIBLE,
    INDEX `fk_assignee_user1_idx` (`user_id` ASC) VISIBLE,
    CONSTRAINT `fk_assignee_issue1`
    FOREIGN KEY (`issue_id`)
    REFERENCES `issue-tracker`.`issue` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_assignee_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `issue-tracker`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `issue-tracker`.`issue_label`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `issue-tracker`.`issue_label` ;
CREATE TABLE IF NOT EXISTS `issue-tracker`.`issue_label` (
                                                             `id` INT NOT NULL,
                                                             `issue_id` INT NOT NULL,
                                                             `label_id` INT NOT NULL,
                                                             PRIMARY KEY (`id`),
    INDEX `fk_issue_label_issue1_idx` (`issue_id` ASC) VISIBLE,
    INDEX `fk_issue_label_label1_idx` (`label_id` ASC) VISIBLE,
    CONSTRAINT `fk_issue_label_issue1`
    FOREIGN KEY (`issue_id`)
    REFERENCES `issue-tracker`.`issue` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_issue_label_label1`
    FOREIGN KEY (`label_id`)
    REFERENCES `issue-tracker`.`label` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
