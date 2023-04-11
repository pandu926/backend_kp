'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sertifikat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sertifikat.init({
    id_user: DataTypes.INTEGER,
    id_sertifikat: DataTypes.STRING,
    nama_file: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sertifikat',
  });
  return sertifikat;
};