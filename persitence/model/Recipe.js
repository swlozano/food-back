const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('Recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type:DataTypes.STRING,
      allowNull:false
    },
    score: {
      type:DataTypes.INTEGER
  
    },
    healthyLevel:{
      type:DataTypes.INTEGER
    }, 
    steps:{
      type:DataTypes.STRING,
    }

  });
};