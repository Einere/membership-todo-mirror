CREATE TABLE `Category`
(
    `id`    int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name`  varchar(100)     NOT NULL,
    `board` int(10) unsigned NOT NULL,
    PRIMARY KEY (`id`),
    KEY `Category_FK` (`board`),
    CONSTRAINT `Category_FK` FOREIGN KEY (`board`) REFERENCES `Board` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci