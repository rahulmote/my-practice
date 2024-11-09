-- CREATE DATABASE college;
-- USE college;
-- CREATE TABLE teacher(
-- id INT,
-- name VARCHAR(30),
-- subject VARCHAR(50),
-- salary INT DEFAULT 100000
-- );

-- INSERT INTO teacher
-- VALUES 
-- (23,"ajay","math",50000),
-- (47,"bharat","english",60000),
-- (18,"chetan","chemistry",45000),
-- (9,"divya","physics",75000);

-- SELECT * FROM teacher;

-- SELECT * FROM teacher
-- WHERE salary > 55000;

-- ALTER TABLE teacher
-- CHANGE COLUMN salary ctc INT ;

-- UPDATE teacher
-- SET ctc =ctc*0.25+ctc; 
-- SET SQL_SAFE_UPDATES =0;


-- ALTER TABLE teacher
-- ADD  city  VARCHAR(25) DEFAULT "Gurgaon"; 

-- ALTER TABLE teacher
-- DROP COLUMN ctc;


-- CREATE DATABASE student;
-- USE student;

-- CREATE TABLE info(
-- roll_no INT,
-- name VARCHAR(30),
-- city VARCHAR(30),
-- marks INT
-- );

-- INSERT INTO info
-- VALUES
-- (110,"Adam","Delhi",76),
-- (108,"Bob","Mumbai",65),
-- (124,"Casey","Pune",94),
-- (112,"Duke","Pune",80);

-- SELECT*FROM info;


-- SELECT * FROM   info
-- WHERE marks >75;

-- SELECT city FROM info;

-- SELECT city, max(marks)
-- FROM info
-- GROUP BY city;

-- SELECT avg(info)
-- FROM info;

-- ALTER TABLE info
-- ADD COLUMN grade VARCHAR(15);

-- SELECT * FROM info;


-- UPDATE info
-- SET grade = "O"
-- WHERE marks >80;


-- UPDATE info
-- SET grade = "A"
-- WHERE marks >70 AND marks <80;

-- UPDATE info
-- SET grade = "B"
-- WHERE marks >60 AND marks <70;
 



 
