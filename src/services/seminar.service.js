const { seminar } = require("../database/models");

const add = async (data_seminar) => {
  return await seminar.create(data_seminar);
};
const get = async (id) => {
  return await seminar.findOne({
    where: { id },
  });
};
const update = async (id, data_input) => {
  return await seminar.update(data_input, {
    where: { id },
  });
};
const remove = async (id) => {
  return await seminar.destroy({
    where: { id },
  });
};

const service = { add, get, update, remove };

module.exports = service;
