CREATE DATABASE IF NOT EXISTS TastyTom;

USE TastyTom;

CREATE TABLE IF NOT EXISTS Users (
    idUsers INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    telephone VARCHAR(20),  -- Peut être NULL si ce n'est pas obligatoire
    email VARCHAR(100) NOT NULL UNIQUE,
    dateCreation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dateInscription DATE DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS Recipes (
    idRecipe INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    idUsers INT UNSIGNED NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_approved BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (idUsers) REFERENCES Users(idUsers) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Ingredients (
    idIngredients INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    idRecipe INT UNSIGNED NOT NULL,
    name VARCHAR(100) NOT NULL,
    quantity VARCHAR(50),
    FOREIGN KEY (idRecipe) REFERENCES Recipes(idRecipe) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Admin (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);


INSERT INTO Admin (username, password)
VALUES 
('admin1', 'hashed_admin_password_1');