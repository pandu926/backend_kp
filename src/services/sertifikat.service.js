const { sertifikat } = require("../database/models");

const add = async (data_input) => {
  console.log(data_input);
  return await sertifikat.create(data_input);
};

const get = async (id) => {
  return await sertifikat.findAll({
    where: {
      id,
    },
  });
};
const update = async ({ id, data_input }) => {
  const { id_user, id_Sertifikat, nama_file } = data_input;
  return await sertifikat.update(
    { id_user, id_Sertifikat, nama_file },
    {
      where: {
        id,
      },
      returning: true,
    }
  );
};
const remove = async (id) => {
  return await sertifikat.destroy({
    where: {
      id,
    },
  });
};

const service = { add, get, update, remove };

module.exports = service;
