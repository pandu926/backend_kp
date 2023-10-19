// Model "user" definition
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.belongsToMany(models.seminar, {
        through: models.pendaftaran_Seminar, // Model pivot
        foreignKey: "id_user", // Foreign key yang menghubungkan "user" ke "pendaftaran_Seminar"
        otherKey: "id_seminar", // Foreign key yang menghubungkan "seminar" ke "pendaftaran_Seminar"
        as: "seminars", // Anda dapat memberikan alias sesuai kebutuhan
      });
    }
  }

  user.init(
    {
      nim: DataTypes.INTEGER,
      nama: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      semester: DataTypes.INTEGER,
      hp: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user",
    }
  );

  return user;
};
