DROP TABLE IF EXISTS `shorts_like`;
DROP TABLE IF EXISTS `bookmark`;
DROP TABLE IF EXISTS `comment`;
DROP TABLE IF EXISTS `follow`;
DROP TABLE IF EXISTS `notification_entity`;
DROP TABLE IF EXISTS `shorts`;
DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
    `user_id` bigint NOT NULL AUTO_INCREMENT,
    `email` varchar(255) DEFAULT NULL,
    `follow_private` bit(1) DEFAULT NULL,
    `label_char_src` longtext,
    `label_name` varchar(255) DEFAULT NULL,
    `nickname` varchar(255) DEFAULT NULL,
    `password` varchar(255) DEFAULT NULL,
    `pro_img_src` longtext,
    `role` varchar(255) DEFAULT NULL,
    `username` varchar(255) DEFAULT NULL,
    `is_certed` bit(1) DEFAULT NULL,
    `reg_date_time` datetime(6) DEFAULT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `shorts` (
  `shorts_id` bigint NOT NULL AUTO_INCREMENT,
  `create_time` datetime(6) DEFAULT NULL,
  `file_src` longtext,
  `file_type` varchar(255) DEFAULT NULL,
  `is_mapped` bit(1) DEFAULT NULL,
  `label_name` varchar(255) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `location_dong` varchar(255) DEFAULT NULL,
  `location_gu` varchar(255) DEFAULT NULL,
  `location_si` varchar(255) DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `thumbnail_src` longtext,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`shorts_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `bookmark` (
  `bookmark_id` bigint NOT NULL AUTO_INCREMENT,
  `shorts_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`bookmark_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `comment` (
  `comment_id` bigint NOT NULL AUTO_INCREMENT,
  `comment_group` bigint DEFAULT NULL,
  `content` longtext,
  `create_time` datetime(6) DEFAULT NULL,
  `sequence` bigint DEFAULT NULL,
  `shorts_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `follow` (
  `follow_id` bigint NOT NULL AUTO_INCREMENT,
  `following_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`follow_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `notification_entity` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `is_read` bit(1) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `receiver_id` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `shorts_like` (
  `like_id` bigint NOT NULL AUTO_INCREMENT,
  `vote` bit(1) NOT NULL,
  `shorts_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`like_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

