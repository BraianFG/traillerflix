const sequelize = require('./src/conexion/connection');
const contenido = require('./src/modelos/contenido');
const categorias = require('./src/modelos/categorias');
const generos = require('./src/modelos/generos');

let express = require("express");
let app = express();
/*------------------------------------------------------------------------------------------------------*/
app.use(express.json());
app.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    await categorias.sync();
    await contenido.sync();
    await generos.sync();
    next();
  } catch (error) {
    res.status(500).json({ error: 'Error al conectarse al servidor', description: error.messagge });
  }
})
/*------------------------------------------------------------------------------------------------------*/
app.get('/categorias', async (req, res) => {
  try {
    const allcategorias = await categorias.findAll();
    allcategorias.length !== 0 ? res.status(200).json(allcategorias) : res.status(404).json({ error: "No se encontraron categorías" })
  } catch (error) {
    res.status(500).json({ error: "Error al conectarse al servidor", description: error.messagge })
  }
});
/*------------------------------------------------------------------------------------------------------*/
app.get('/catalogo', async (req, res) => {
  try {
    const allcontenidos = await contenido.findAll();
    allcontenidos.length !== 0 ? res.status(200).json(allcontenidos) : res.status(404).json({ error: "No se encontraron peliculas" })
  } catch (error) {
    res.status(500).json({ error: "Error al conectarse al servidor", description: error.messagge })
  }
});
/*------------------------------------------------------------------------------------------------------*/
app.get('/catalogo/id/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const catalogo = await contenido.findByPk(id);

    !catalogo ? res.status(404).json({error: "Película no encontrada"})
    :res.status(200).json(catalogo)
  } catch (error) {
    res.status(500).json({error : "Película no encontrada",description : error.messagge}) 
  }
});
/*------------------------------------------------------------------------------------------------------*/
app.get('/catalogo/titulo/:titulo', async (req, res) => {
  try {
    const { titulo } = req.params;
    const catalogo = await contenido.findAll({where: { titulo:{[sequelize.Op.like]: `%${titulo}%`} }
  });
    !catalogo ? res.status(404).json({error: "Película no encontrada"})
    :res.status(200).json(catalogo)
  } catch (error) {
    res.status(500).json({error : "Error en el servidor",description : error.messagge}) 
  }
});
/*------------------------------------------------------------------------------------------------------*/
app.get('/catalogo/generos/:genero', async (req, res) => {
  try {
    const { generos } = req.params;
    const contenidoPorGenero = await generos.findAll({where: {generos: {[Op.like]: `%${generos}%`}
  }});
    !contenidoPorGenero 
    ? res.status(404).json({error: "genero no encontrado"})
    :res.status(200).json(contenidoPorGenero)
  } catch (error) {
    res.status(500).json({error : "Error del servidor",description : error.messagge}) 
  }
});
/*------------------------------------------------------------------------------------------------------*/
app.get('/catalogo/categoria/:categoria', async (req, res) => {
  try {
    const { categoria } = req.params;
    const contenidoPorCategoria = await contenido.findAll({ where: {categoria } });
    !contenidoPorCategoria ? res.status(404).json({error: "categoría no encontrada"})
    :res.status(200).json(contenidoPorCategoria)
  } catch (error) {
    res.status(500).json({error : "categoría no encontrada",description : error.messagge}) 
  }
});
app.listen(3008, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3008!");
});
