CREATE DATABASE MEETING_CREATOR;

CREATE USER 'MEETING_CREATOR'@'%' IDENTIFIED BY 'MEETING_CREATOR';
GRANT ALL PRIVILEGES ON MEETING_CREATOR.* TO 'MEETING_CREATOR'@'%';
FLUSH PRIVILEGES;

-- Database tables below --
CREATE TABLE MEETING_CREATOR.USER
(
  id       INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name     VARCHAR(255)    NOT NULL,
  username VARCHAR(255)    NOT NULL,
  password VARCHAR(255)    NOT NULL
);

CREATE TABLE MEETING_CREATOR.MEETING
(
  id          INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title       VARCHAR(255)    NOT NULL,
  description TEXT,
  start_time  DATETIME        NOT NULL,
  end_time    DATETIME        NOT NULL,
  location    VARCHAR(255),
  remote      BOOLEAN,
  created_by  INT             NOT NULL,
  FOREIGN KEY (created_by) REFERENCES MEETING_CREATOR.USER (id)
);

CREATE TABLE MEETING_CREATOR.CLIENT
(
  id          INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name        VARCHAR(255)    NOT NULL,
  description VARCHAR(255)    NOT NULL
);

CREATE TABLE MEETING_CREATOR.CLIENT_CONTACTS
(
  id        INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email     VARCHAR(255) NOT NULL,
  client_id INT          NOT NULL,
  FOREIGN KEY (client_id) REFERENCES MEETING_CREATOR.CLIENT (id)
);

-- Some dummy data for testing --
INSERT INTO MEETING_CREATOR.USER (id, name, username, password)
VALUES (1, 'Admin User', 'admin', 'admin');

INSERT INTO MEETING_CREATOR.CLIENT (id, name, description)
VALUES (1, 'La vie', 'Sustainable buildings'),
       (2, 'Case de colores', 'Vivant designs'),
       (3, 'Monopoly', 'Main focus on expansion');

INSERT INTO MEETING_CREATOR.MEETING (id, title, description, start_time, end_time, location, remote, created_by, client)
VALUES (1, 'Kickoff Meeting', 'Meeting to kickoff the project', '2023-09-15 10:00:00', '2023-09-15 11:00:00',
        'Meeting Room 1', false, 1, 2);

INSERT INTO MEETING_CREATOR.CLIENT_CONTACTS (id, email, client_id)
VALUES (1, 'john.doe@jdomain.com', 1),
       (2, 'jane.smith@sdomain.net', 2),
       (3, 'micheal.dorry@monopoly.org', 3);
