# TRAILERFLIX UNTREF

El proyecto es sobre una página de peliculas 

## Tener instalado previamente 

* NODE JS

* NPM
  
* MYSQL WORKBENCH

**PROGRAMAS DE NODE JS QUE HAY QUE INSTALAR**
Teniendo en cuenta que no está la carpeta Node Modules no está en el proyecto hay que tener instalado para que funcione el proyecto

* sequelize2

* express

* nodenom

* mysql2

* dotenv

## ANTES DE EJECUTAR EL PROGRAMA 
Importe y ejecute tablas.sql en Mysql Workbench 

## ¿Cómo usar el programa? 

Todo lo que se describa a continuación hay que hacerlo con petición GET en **POSTMAN** o **THUNDER CLIENT**
  
### Consulta a todo el catálogo
  
* **http://localhost/catalogo/**
  
Esto permite ver todo el contenido de las peliculas en general

### Consulta a toda las categorías disponibles

* **http://localhost/categorias/**
  
Esto permite ver todas las categorias de las películas que hay disponibles

### Buscar por número o ID

* **http://localhost/id/Número**
Esto permite buscar películas por número o id, en donde dice **Número** hay que buscar el id que exista si no está va a saltar un mensaje de "Pelicula no encontrada"

### Buscar por nombre

* **http://localhost/titulo/titulo**
Esto permite buscar películas por nombre,en donde dice **titulo** al final hay que remplazar por nombre 

## Detalles del proyecto

### Diseño de la base de datos 

![image](https://github.com/BraianFG/traillerflix/assets/55467665/6c519566-f955-4600-a36c-615add073e35)

