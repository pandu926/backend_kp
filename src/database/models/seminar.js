'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  seminar.init({
    nama: DataTypes.STRING,
    status: DataTypes.STRING,
    tanggal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'seminar',
  });
  return seminar;
};