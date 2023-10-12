const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/connection');

const contenido = sequelize.define('contenido', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoriaID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 1,
    },
    generoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 1,
    },    
    resumen: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "N/A",
    },
    temporadas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0.00,
      },
      repartoID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
      },  
      trailer: {
        type: DataTypes.STRING,
        allowNull: false,
        default: 0,
      },
}, {
  tableName: 'contenido',
  timestamps: false,
});

module.exports = contenido;
