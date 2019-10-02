CREATE TABLE `Board`
(
    `id`    int(10) unsigned NOT NULL AUTO_INCREMENT,
    `owner` int(10) unsigned NOT NULL,
    `mode`  int(10) unsigned NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`),
    KEY `Board_FK` (`owner`),
    KEY `Board_FK_1` (`mode`),
    CONSTRAINT `Board_FK` FOREIGN KEY (`owner`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `Board_FK_1` FOREIGN KEY (`mode`) REFERENCES `Mode` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci