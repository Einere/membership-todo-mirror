CREATE TABLE `Log`
(
    `id`     int(10) unsigned NOT NULL AUTO_INCREMENT,
    `actor`  int(10) unsigned NOT NULL,
    `what`   int(10) unsigned NOT NULL,
    `from`   int(10) unsigned DEFAULT NULL,
    `to`     int(10) unsigned DEFAULT NULL,
    `time`   datetime         NOT NULL,
    `action` varchar(100)     NOT NULL,
    PRIMARY KEY (`id`),
    KEY `Log_FK` (`actor`),
    KEY `Log_FK_1` (`what`),
    KEY `Log_FK_3` (`to`),
    KEY `Log_FK_2` (`from`),
    CONSTRAINT `Log_FK` FOREIGN KEY (`actor`) REFERENCES `User` (`id`) ON UPDATE CASCADE,
    CONSTRAINT `Log_FK_1` FOREIGN KEY (`what`) REFERENCES `Note` (`id`) ON UPDATE CASCADE,
    CONSTRAINT `Log_FK_2` FOREIGN KEY (`from`) REFERENCES `Category` (`id`) ON UPDATE CASCADE,
    CONSTRAINT `Log_FK_3` FOREIGN KEY (`to`) REFERENCES `Category` (`id`) ON UPDATE CASCADE
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci