const repo = require("./repo.pendaftaranSeminar");

const registerService = async ({ id_user, id_seminar, status }) => {
  return await repo.registerRepo({
    id_user,
    id_seminar,
    status,
  });
};

const getDataSingleService = async (id) => {
  return await repo.getDataSingleRepo(id);
};

const getDataAllService = async () => {
  return await repo.getDataAllRepo();
};

const updateService = async (req, res) => {};

const deleteService = async (req, res) => {};

const service = {
  registerService,
  getDataAllService,
  getDataSingleService,
  updateService,
  deleteService,
};

module.exports = service;
