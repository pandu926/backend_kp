const service = require("../services/service.pendaftaranSeminar");

const registerController = async (req, res) => {
  const { id_user, id_seminar, status } = req.body;

  const register_data = await service.registerService({
    id_user,
    id_seminar,
    status,
  });
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
  const data = await service.getDataSingleService(id);
  if (data) {
    return res.status(200).json(data);
  }
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
