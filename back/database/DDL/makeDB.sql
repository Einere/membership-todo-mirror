-- 테이블 순서는 관계를 고려하여 한 번에 실행해도 에러가 발생하지 않게 정렬되었습니다.

-- User Table Create SQL
CREATE TABLE User
(
    `id`        INT         NOT NULL AUTO_INCREMENT COMMENT 'id',
    `user_id`   VARCHAR(20) NOT NULL COMMENT 'user_id',
    `password`  VARCHAR(20) NOT NULL COMMENT 'password',
    `name`      VARCHAR(20) NOT NULL COMMENT 'name',
    `privilege` INT         NOT NULL COMMENT 'privilege',
    PRIMARY KEY (id)
);

ALTER TABLE User
    COMMENT 'User';


-- User Table Create SQL
CREATE TABLE Mode
(
    `id`   INT NOT NULL AUTO_INCREMENT COMMENT 'id',
    `mode` INT NOT NULL COMMENT 'mode',
    PRIMARY KEY (id)
);

ALTER TABLE Mode
    COMMENT 'Mode';


-- User Table Create SQL
CREATE TABLE Board
(
    `id`    INT         NOT NULL AUTO_INCREMENT COMMENT 'id',
    `name`  VARCHAR(20) NOT NULL COMMENT 'name',
    `owner` INT         NOT NULL COMMENT 'owner',
    `mode`  INT         NOT NULL COMMENT 'mode',
    PRIMARY KEY (id)
);

ALTER TABLE Board
    COMMENT 'Board';

ALTER TABLE Board
    ADD CONSTRAINT FK_Board_owner_User_id FOREIGN KEY (owner)
        REFERENCES User (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Board
    ADD CONSTRAINT FK_Board_mode_Mode_id FOREIGN KEY (mode)
        REFERENCES Mode (id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Category
(
    `id`    INT         NOT NULL AUTO_INCREMENT COMMENT 'id',
    `name`  VARCHAR(20) NOT NULL COMMENT 'name',
    `board` INT         NOT NULL COMMENT 'board',
    PRIMARY KEY (id)
);

ALTER TABLE Category
    COMMENT 'Category';

ALTER TABLE Category
    ADD CONSTRAINT FK_Category_board_Board_id FOREIGN KEY (board)
        REFERENCES Board (id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Note
(
    `id`       INT  NOT NULL AUTO_INCREMENT COMMENT 'id',
    `content`  TEXT NULL COMMENT 'content',
    `position` INT  NOT NULL COMMENT 'position',
    `category` INT  NOT NULL COMMENT 'category',
    `author`   INT  NOT NULL COMMENT 'author',
    PRIMARY KEY (id)
);

ALTER TABLE Note
    COMMENT 'Note';

ALTER TABLE Note
    ADD CONSTRAINT FK_Note_category_Category_id FOREIGN KEY (category)
        REFERENCES Category (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Note
    ADD CONSTRAINT FK_Note_author_User_id FOREIGN KEY (author)
        REFERENCES User (id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Whitelist
(
    `id`   INT NOT NULL AUTO_INCREMENT COMMENT 'id',
    `user` INT NOT NULL COMMENT 'user',
    `mode` INT NOT NULL COMMENT 'mode',
    PRIMARY KEY (id)
);

ALTER TABLE Whitelist
    COMMENT 'Whitelist';

ALTER TABLE Whitelist
    ADD CONSTRAINT FK_Whitelist_user_User_id FOREIGN KEY (user)
        REFERENCES User (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Whitelist
    ADD CONSTRAINT FK_Whitelist_mode_Mode_id FOREIGN KEY (mode)
        REFERENCES Mode (id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Log
(
    `id`     INT         NOT NULL AUTO_INCREMENT COMMENT 'id',
    `action` VARCHAR(10) NOT NULL COMMENT 'action',
    `time`   DATETIME    NOT NULL COMMENT 'time',
    `actor`  INT         NOT NULL COMMENT 'actor',
    `what`   INT         NOT NULL COMMENT 'what',
    `from`   INT         NULL COMMENT 'from',
    `to`     INT         NULL COMMENT 'to',
    PRIMARY KEY (id)
);

ALTER TABLE Log
    COMMENT 'Log';

ALTER TABLE Log
    ADD CONSTRAINT FK_Log_actor_User_id FOREIGN KEY (actor)
        REFERENCES User (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Log
    ADD CONSTRAINT FK_Log_what_Note_id FOREIGN KEY (what)
        REFERENCES Note (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Log
    ADD CONSTRAINT FK_Log_from_Category_id FOREIGN KEY ('from')
        REFERENCES Category (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Log
    ADD CONSTRAINT FK_Log_to_Category_id FOREIGN KEY ('to')
        REFERENCES Category (id) ON DELETE RESTRICT ON UPDATE RESTRICT;


