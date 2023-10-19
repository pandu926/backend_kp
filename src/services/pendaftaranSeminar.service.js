const { pendaftaran_Seminar, user, seminar } = require("../database/models");
const { sequelize } = require("../database/models"); // Sesuaikan path sesuai dengan lokasi model Anda

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized successfully");
    // Start your Node.js application here
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

const registerRepo = async (data_input) => {
  return await pendaftaran_Seminar.create(data_input);
};

const getDataSingleRepo = async (id, id_user, id_seminar) => {
  console.log(id_user);
  if (typeof id_user == "undefined") {
    return await pendaftaran_Seminar.findOne({
      where: {
        id,
      },
    });
  } else {
    return await pendaftaran_Seminar.findOne({
      where: {
        id_user,
        id_seminar,
      },
    });
  }
};

const getDataAllRepo = async (id_user) => {
  if (typeof id_user == "undefined") {
    return await pendaftaran_Seminar.findAll();
  }
  return await pendaftaran_Seminar.findAll({
    where: { id_user },
    include: [
      {
        model: seminar,
        as: "seminar", // Alias yang digunakan dalam model seminar
      },
    ],
  });
};

const updateService = async (id, data_input) => {
  return await pendaftaran_Seminar.update(data_input, {
    where: { id },
    returning: true,
  });
};

const service = {
  registerRepo,
  getDataSingleRepo,
  getDataAllRepo,
  updateService,
};
module.exports = service;
