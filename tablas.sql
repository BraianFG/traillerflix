-- Crear la base de datos
CREATE SCHEMA trailerflix;

-- Referencia a la base de datos
USE trailerflix;

-- Crear la tabla "categorias"
CREATE TABLE categorias (
    categoriaID INT PRIMARY KEY,
    categoria VARCHAR(254)
);

-- Crear la tabla "generos"
CREATE TABLE generos (
    generoID INT PRIMARY KEY,
    genero VARCHAR(254)
);

-- Crear la tabla "actores"
CREATE TABLE actores (
    id INT PRIMARY KEY,
    actor VARCHAR(254)
);

-- Crear la tabla "contenido"
CREATE TABLE contenido (
    id INT PRIMARY KEY,
    titulo VARCHAR(254),
    poster VARCHAR(254),
    categoriaID INT,
    generoID INT,
    resumen VARCHAR(254),
    temporadas INT,
    repartoID INT,
    trailer VARCHAR(254),
    FOREIGN KEY (categoriaID) REFERENCES categorias(categoriaID),
    FOREIGN KEY (generoID) REFERENCES generos(generoID),
    FOREIGN KEY (repartoID) REFERENCES actores(id)
);

-- Crear la tabla "reparto_catalogo"
CREATE TABLE reparto_catalogo (
    reparto_catalogoID INT PRIMARY KEY,
    catalogoID INT,
    FOREIGN KEY (catalogoID) REFERENCES contenido(id)
);

-- Crear la tabla "reparto_genero"
CREATE TABLE reparto_genero (
    catalogoID INT,
    generoID INT,
    FOREIGN KEY (catalogoID) REFERENCES contenido(id),
    FOREIGN KEY (generoID) REFERENCES generos(generoID)
);
