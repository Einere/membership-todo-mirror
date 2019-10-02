CREATE TABLE `User`
(
    `id`        int(10) unsigned                                              NOT NULL AUTO_INCREMENT,
    `password`  varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
    `privilege` int(10) unsigned                                              NOT NULL,
    `name`      varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
    `user_id`   varchar(100)                                                  NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `Users_UN` (`user_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 20
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci