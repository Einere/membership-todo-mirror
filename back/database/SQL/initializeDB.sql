# User
insert into mydb.User (user_id, password, name, privilege)
VALUES ('test1', 'dveNbZUh4Is59XEeVqCIJyt/IrULTZhRLhCDE6juCCVy5b2NTaR6TRsJFJ7qsWeknaykUn4hBgxAtT/hgZ6AMw==',
        'test_user1', 0);
insert into mydb.User (user_id, password, name, privilege)
VALUES ('test2', 'mKT2t3vi4EuvRjHMyQ/mxk/cOYDRgNyQmRUoBCYCQhM9dMimHCTZpT6my6mT1mpd4Ap+DiZkunYstbRMLMDgXQ==',
        'test_user2', 1);
insert into mydb.User (user_id, password, name, privilege)
VALUES ('test3', 'F4i+AbnLPbYtIQM3ly7s3Q2LB8oiY08IGL2eRQtBtYpyZTmKe0rEAGQmqw3zH3ExydIp2oOYzc5zKSUHWOh1Aw==',
        'test_user3', 2);

# Item
INSERT INTO mydb.Item (src, title, content, href, link, category)
VALUES ('images/1.jpeg', 'title1', 'content1', '', 'link1', 'ship');
INSERT INTO mydb.Item (src, title, content, href, link, category)
VALUES ('images/2.jpg', 'title2', 'content2', '', 'link2', 'ship');
INSERT INTO mydb.Item (src, title, content, href, link, category)
VALUES ('images/3.jpeg', 'title3', 'content3', '', 'link3', 'ship');
INSERT INTO mydb.Item (src, title, content, href, link, category)
VALUES ('images/4.jpeg', 'title4', 'content4', '', 'link4', 'ship');
INSERT INTO mydb.Item (src, title, content, href, link, category)
VALUES ('images/5.jpg', 'title5', 'content5', '', 'link5', 'stream');
INSERT INTO mydb.Item (src, title, content, href, link, category)
VALUES ('images/6.jpeg', 'title6', 'content6', '', 'link6', 'stream');
INSERT INTO mydb.Item (src, title, content, href, link, category)
VALUES ('images/7.jpg', 'title7', 'content7', '', 'link7', 'stream');
INSERT INTO mydb.Item (src, title, content, href, link, category)
VALUES ('images/8.png', 'title8', 'content8', '', 'link8', 'shop');
INSERT INTO mydb.Item (src, title, content, href, link, category)
VALUES ('images/9.jpeg', 'title9', 'content9', '', 'link9', 'shop');

# Mode
INSERT INTO mydb.Mode (mode)
VALUES (0);
INSERT INTO mydb.Mode (mode)
VALUES (1);
INSERT INTO mydb.Mode (mode)
VALUES (2);

# Board
INSERT INTO mydb.Board (owner, mode)
VALUES (0, 0);
INSERT INTO mydb.Board (owner, mode)
VALUES (1, 1);
INSERT INTO mydb.Board (owner, mode)
VALUES (2, 2);

# Category
INSERT INTO mydb.Category (name, board)
VALUES ('todo', 0);
INSERT INTO mydb.Category (name, board)
VALUES ('inprogress', 0);
INSERT INTO mydb.Category (name, board)
VALUES ('done', 0);
INSERT INTO mydb.Category (name, board)
VALUES ('todo2', 1);
INSERT INTO mydb.Category (name, board)
VALUES ('inprogress2', 1);
INSERT INTO mydb.Category (name, board)
VALUES ('done2', 1);
INSERT INTO mydb.Category (name, board)
VALUES ('todo3', 2);
INSERT INTO mydb.Category (name, board)
VALUES ('inprogress3', 2);
INSERT INTO mydb.Category (name, board)
VALUES ('done3', 2);

# Note
INSERT INTO mydb.Note (category, content, author, position)
VALUES (1, 'a', 0, 0);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (1, 'b', 0, 1);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (1, 'c', 0, 2);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (2, 'd', 0, 0);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (2, 'e', 0, 1);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (2, 'f', 0, 2);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (3, 'g', 0, 0);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (3, 'h', 0, 1);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (3, 'i', 0, 2);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (4, 'j', 1, 0);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (4, 'k', 1, 1);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (4, 'l', 1, 2);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (5, 'm', 1, 0);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (5, 'n', 1, 1);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (5, 'o', 1, 2);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (6, 'p', 1, 0);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (6, 'q', 1, 1);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (6, 'r', 1, 2);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (7, 'j', 2, 0);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (7, 'k', 2, 1);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (7, 'l', 2, 2);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (8, 'm', 2, 0);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (8, 'n', 2, 1);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (8, 'o', 2, 2);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (9, 'p', 2, 0);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (9, 'q', 2, 1);
INSERT INTO mydb.Note (category, content, author, position)
VALUES (9, 'r', 2, 2);