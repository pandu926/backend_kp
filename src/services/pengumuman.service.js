const { pengumuman } = require("../database/models");

const get = async (id) => {
  if (typeof id == "undefined") {
    return await pengumuman.findAll();
  }
  return await pengumuman.findAll({
    where: { id },
  });
};

const add = async (data_input) => {
  return await pengumuman.create(data_input);
};
const update = async (id, data_input) => {
  return await pengumuman.update(data_input, {
    where: { id },
    returning: true,
  });
};
const remove = async (id) => {
  return await pengumuman.destroy({
    where: { id },
  });
};

const service = {
  add,
  remove,
  update,
  get,
};

module.exports = service;
