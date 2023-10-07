const sequelize = require('./src/conexion/connection');
const contenido = require('./src/modelos/contenido');
const categorias = require('./src/modelos/categorias');

let express = require("express");
let app = express();

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos.');
    await contenido.sync();
    const allcontenidos = await contenido.findAll();
    const allcontenidosData = allcontenidos.map(contenido => contenido.dataValues);
    app.get("/catalogo", function (req, res) {
      res.send(allcontenidosData);
    });
  } catch (error) {
    console.error('Error al conectar o consultar la base de datos:', error);
  } finally {
    sequelize.close();
  }

}
main();


async function main2() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos.');
    await categorias.sync();
    const allcategorias = await categorias.findAll();
    const allcategoriasData = allcategorias.map(categorias => categorias.dataValues);
    app.get("/categorias", function (req, res) {
      res.send(allcategoriasData);
    });
  } catch (error) {
    console.error('Error al conectar o consultar la base de datos:', error);
  } finally {
    sequelize.close();
  }
}
main2();

async function main3() {
  app.get("/catalogo/titulo:contnombre", async (req, res) => {
    try {
      const { nombre } = req.params;
      const contnombre = await contenido.findOne({ where: { nombre } })
      res.send(contnombre);
    }
    catch {

    }
  });
}
main3();

app.listen(3008, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3008!");
});