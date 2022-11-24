'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gateway extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      // define association here
      Gateway.hasMany(models.peripherical,{
        foreignKey: 'id_gateway'
      }) 
    }
  }
  Gateway.init({
      serial_number: DataTypes.STRING,
      human_readable: DataTypes.STRING,
      ipv4_address: DataTypes.STRING,
      published: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'gateway',
  });
  return Gateway;
};