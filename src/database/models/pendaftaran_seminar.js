"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pendaftaran_Seminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pendaftaran_Seminar.belongsTo(models.user, {
        foreignKey: "id_user",
        targetKey: "id",
      });
      pendaftaran_Seminar.belongsTo(models.seminar, {
        foreignKey: "id_seminar",
        targetKey: "id",
      });
    }
  }
  pendaftaran_Seminar.init(
    {
      id_user: DataTypes.INTEGER,
      id_seminar: DataTypes.INTEGER,
      status: DataTypes.STRING,
      link: DataTypes.STRING,
      pembayaran: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pendaftaran_Seminar",
    }
  );
  return pendaftaran_Seminar;
};
