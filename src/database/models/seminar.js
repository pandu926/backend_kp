"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class seminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      seminar.belongsToMany(models.user, {
        through: models.pendaftaran_Seminar, // Model pivot
        foreignKey: "id_seminar", // Foreign key yang menghubungkan "seminar" ke "pendaftaran_Seminar"
        otherKey: "id_user", // Foreign key yang menghubungkan "user" ke "pendaftaran_Seminar"
        as: "users", // Anda dapat memberikan alias sesuai kebutuhan
      });
    }
  }
  seminar.init(
    {
      nama: DataTypes.STRING,
      status: DataTypes.STRING,
      tanggal: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "seminar",
    }
  );
  return seminar;
};
