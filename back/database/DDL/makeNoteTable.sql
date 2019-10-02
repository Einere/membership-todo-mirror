CREATE TABLE `Note`
(
    `id`       int(10) unsigned NOT NULL AUTO_INCREMENT,
    `category` int(10) unsigned NOT NULL,
    `content`  text,
    `author`   int(10) unsigned NOT NULL,
    `position` double           NOT NULL,
    PRIMARY KEY (`id`),
    KEY `Note_FK` (`category`),
    KEY `Note_FK_1` (`author`),
    CONSTRAINT `Note_FK` FOREIGN KEY (`category`) REFERENCES `Category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `Note_FK_1` FOREIGN KEY (`author`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci