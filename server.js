const sequelize = require('./src/conexion/connection');
const contenido = require('./src/modelos/contenido');
const categorias = require('./src/modelos/categorias');

let express = require("express");
let app = express();
/*------------------------------------------------------------------------------------------------------*/
app.use(express.json());
app.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    await categorias.sync();
    await contenido.sync();
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
    const catalogo = await contenido.findOne({ where: { titulo } });
    !catalogo ? res.status(404).json({error: "Película no encontrada"})
    :res.status(200).json(catalogo)
  } catch (error) {
    res.status(500).json({error : "Película no encontrada",description : error.messagge}) 
  }
});
/*------------------------------------------------------------------------------------------------------*/
/*app.get('/catalogo/genero/:genero', async (req, res) => {
  try {
    const { genero } = req.params;
    const contenidoPorGenero = await contenido.findOne({ where: { genero } });
    !contenidoPorGenero ? res.status(404).json({error: "Película no encontrada"})
    :res.status(200).json(contenidoPorGenero)
  } catch (error) {
    res.status(500).json({error : "Película no encontrada",description : error.messagge}) 
  }
});
*/
/*------------------------------------------------------------------------------------------------------*/
app.listen(3008, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3008!");
});
