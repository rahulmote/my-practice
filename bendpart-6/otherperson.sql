-- CREATE DATABASE instagram;

-- USE instagram;

-- CREATE TABLE user(
--  id INT,
--  age INT,
--  name VARCHAR(30) NOT NULL,
--  email VARCHAR(50) UNIQUE,
--  followers INT DEFAULT 0 ,
--  following INT ,
--  CONSTRAINT CHECK (age >=13),
--  PRIMARY KEY (id)
-- );

-- INSERT INTO user
-- (id,name,email,followers,following)
-- VALUES 
-- ( 1 ,"divya","divyadake@gmail.com",123,125),
-- ( 2 ,"dake","dake233@gmail.com",123,125);

-- SELECT id,name,emaiL FROM user;

-- SELECT * FROM user; 

-- CREATE TABLE post(
--  id INT PRIMARY KEY ,
--  name VARCHAR(30) NOT NULL,
--  user_id INT,
-- foreign key (user_id) references user(id)
-- );
















