CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);