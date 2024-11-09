-- CREATE DATABASE instagram1;
-- USE instagram1;
-- CREATE TABLE instauser(
-- id INT,
-- age INT,
-- name VARCHAR(30) NOT NULL,
-- email VARCHAR(50)UNIQUE,
-- followers INT DEFAULT 0,
-- following INT,
-- CONSTRAINT CHECK (age >= 13),
-- PRIMARY KEY(id)
-- );

-- SELECT * FROM instauser
-- WHERE followers >= 200; 

-- SELECT * FROM instauser
-- WHERE age > 15 AND followers >200; 

-- SELECT * FROM instauser
-- WHERE age > 15 OR followers >200; 

-- SELECT * FROM instauser
-- WHERE age IN (15,19,12);

--  SELECT * FROM instauser
-- WHERE email NOT IN ("adam@yahoo.in","casey@gmail.com","abc123@gmail.com");

--  SELECT * FROM instauser
--  WHERE age BETWEEN 17 AND 19;

-- SELECT name , age,email FROM  instauser
-- WHERE age < 18
-- LIMIT 1; 


-- SELECT * FROM  instauser
-- ORDER BY age ASC; 

-- SELECT * FROM  instauser
-- ORDER BY followers DESC;

-- SELECT max(followers)
-- FROM instauser;

-- SELECT min(followers)
-- FROM instauser;

-- SELECT sum(followers)
-- FROM instauser;

-- SELECT avg(followers)
-- FROM instauser;

-- SELECT count(followers)
-- FROM instauser
-- WHERE age =18;

-- SELECT age, max(followers) FROM instauser
-- GROUP BY age;

-- SELECT * FROM instauser
-- GROUP BY id 
-- HAVING followers > 200;

-- UPDATE instauser
-- SET followers = 300
-- WHERE followers = 123;
-- SET SQL_SAFE_UPDATES = 0;

-- UPDATE instauser
-- SET age = 16
-- WHERE age = 19;

-- DELETE FROM instauser
-- WHERE age = 19; 

-- ALTER TABLE instauser
-- ADD COLUMN me VARCHAR(25) DEFAULT "HELLO";

-- ALTER TABLE instauser
-- DROP COLUMN id;

-- ALTER TABLE instauser
-- RENAME TO user;

-- ALTER TABLE user
-- RENAME TO instauser;

-- ALTER TABLE instauser
-- CHANGE COLUMN followers sub INT DEFAULT 0;

-- ALTER TABLE instauser
-- MODIFY sub INT DEFAULT 5;

-- TRUNCATE TABLE post;

-- TRUNCATE TABLE instauser;

-- SELECT * FROM instauser; 


-- CREATE TABLE post (
-- id INT PRIMARY KEY,
-- content VARCHAR(100),
-- user_id INT,
-- FOREIGN KEY (user_id) REFERENCES user (id)
-- );

-- INSERT INTO instauser
-- VALUES
-- (1,15,"adam","adam@yahoo.in",123,145),
-- (2,18,"bob","bob123@gmail.com",200,201),
-- (3,17,"casey","casey@gmail.com",300,306),
-- (4,19,"donald","donald@gmail.com",200,105);
 
--   INSERT INTO instauser
--   (age, name,email,following)
--   VALUES 
--  (19,"me","me12@gmail.com",201);
 
--  SELECT age, id,followers FROM instauser;

-- SELECT * FROM instauser;

-- SELECT DISTINCT age FROM instauser; 