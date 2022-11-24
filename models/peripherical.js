'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peripherical extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Peripherical.belongsTo(models.gateway,{
        foreignKey: 'id',
        target_key: 'id_gateway'
      })
    }
  }
  Peripherical.init({
    uid: DataTypes.INTEGER,
    vendor: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    id_gateway: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'peripherical',
  });
  return Peripherical;
};