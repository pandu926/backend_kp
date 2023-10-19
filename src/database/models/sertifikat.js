// Model "sertifikat" definition
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class sertifikat extends Model {
    static associate(models) {
      
    }
  }

  sertifikat.init(
    {
      id_user: DataTypes.INTEGER,
      id_sertifikat: DataTypes.STRING,
      nama_file: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "sertifikat",
    }
  );

  return sertifikat;
};
