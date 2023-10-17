const service = require("../services/pendaftaranSeminar.service");

const registerController = async (req, res) => {
  const data_input = req.body;
  const { id_user } = req.body;
  const { id_seminar } = req.body;
  const id = "undifined";

  const checkUser = await service.getDataSingleRepo(id, id_user, id_seminar);
  if (checkUser) {
    return res.status(400).json("forbidden");
  }
  const register_data = await service.registerRepo(data_input);
  if (register_data) {
    return res.status(200).json({
      register_data,
      msg: "pendaftaran seminar berhasil",
    });
  }
  return res.status(400).json({
    msg: "pendaftaran gagal",
  });
};

const getSingleData = async (req, res) => {
  const { id } = req.params;
  const data = await service.getDataSingleRepo(id);
  if (data) {
    return res.status(200).json(data);
  }
  return res.status(404).json("not found");
};

const getAllData = async (req, res) => {
  const data = await service.getDataAllService();
  if (data) {
    return res.status(200).json(data);
  }
};

const updateController = async (req, res) => {
  const { id } = req.params;
  const data_user = req.body;
  const data = await service.updateService({
    id,
    data_user,
  });
  if (data) {
    return res.status(200).json(data);
  }
};

const deleteController = async (req, res) => {};

const conn = {
  registerController,
  getSingleData,
  getAllData,
  updateController,
  deleteController,
};

module.exports = conn;
