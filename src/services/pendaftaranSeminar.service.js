const { pendaftaran_Seminar } = require("../database/models");

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

const getDataAllRepo = async (user_id) => {
  if (typeof user_id == "undefined") {
    return await pendaftaran_Seminar.findAll();
  }
  return await pendaftaran_Seminar.findAll({
    where: { user_id },
  });
};

const service = {
  registerRepo,
  getDataSingleRepo,
  getDataAllRepo,
};
module.exports = service;
