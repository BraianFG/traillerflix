-- Crear la tabla crea base de datos
CREATE SCHEMA trailerflix;

-- Referencia a la base de datos
USE trailerflix;

-- Crear la tabla "categoría"
CREATE TABLE categorias (
    id INT,
    categoria VARCHAR(254),
    FOREIGN KEY(CategoriaID) REFERENCES categorias(categoria)
);

-- Crear la tabla "generos"
CREATE TABLE generos (
    Generoid INT,
    genero VARCHAR(254) 
);

-- Crear la tabla "actores"
CREATE TABLE actores (
    id INT PRIMARY KEY,
    actor VARCHAR(254)
);

-- Crear la tabla "contenido"
CREATE TABLE contenido (
    id INT PRIMARY KEY NOT NULL ,
    FOREIGN KEY (id) references reparto_genero(generoID),
	FOREIGN KEY (id) references reparto_catalogo(reparto_catalogoID),
    titulo VARCHAR(254),
    poster VARCHAR(254),
    categoriaID int,
    FOREIGN KEY (id) REFERENCES reparto(categoria),
    generoID int,
    resumen VARCHAR(254),
    temporadas INT,
    repartoID int,
    trailer VARCHAR(254)
);

-- Crear la tabla "reparto_catalogo"
CREATE TABLE reparto_catalogo (
    FOREIGN KEY (reparto_catalogoID) REFERENCES contenido(id),
    reparto_catalogoID INT,
    catalogoID INT
);

-- Crear la tabla "reparto_genero"
CREATE TABLE reparto_genero (
  catalogoID INT,
  generoID INT,
  FOREIGN KEY (catalogoID) REFERENCES  generos(generoID)
);
