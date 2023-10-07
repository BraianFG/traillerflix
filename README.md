# TRAILLERFLIX UNTREF

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

## ¿Cómo usar el programa? 
### Consulta a todo el catálogo

* Hay que hacer un get en **POSTMAN** o **THUNDER CLIENT**
  
* **http://localhost/catalogo/**
Esto permite ver todo el contenido de las peliculas en general

### Consulta a toda las categorías disponibles

* **http://localhost/categorias/**
Esto permite ver todas las categorias de las películas que hay disponibles

### Buscar por número o ID

* **http://localhost/id/Número**
Esto permite buscar peliculas por número o id, en donde dice **Número** hay que buscar el id que exista si no está va a saltar un mensaje de "Pelicula no encontrada"
