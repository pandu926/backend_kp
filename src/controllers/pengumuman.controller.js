const service = require("../services/pengumuman.service");

const add = async (req, res) => {
  const data_input = req.body;
  const data = await service.add(data_input);
  if (data) {
    return res.status(200).json(data);
  }
  return res.status(400).json("forbiden");
};

const get = async (req, res) => {
  const { id } = req.query;
  const data = await service.get(id);
  if (data) {
    return res.status(200).json(data);
  }
  return res.status(400).json("forbiden");
};

const update = async (req, res) => {
  const { id } = req.params;
  const data_input = req.body;
  const data = await service.update(id, data_input);
  if (data) {
    return res.status(200).json(data);
  }
  return res.status(400).json("forbiden");
};

const remove = async (req, res) => {
  const { id } = req.params;
  const data = await service.remove(id);
  if (data) {
    return res.status(200).json("berhasil dihapus");
  }
  return res.status(400).json("forbiden");
};

const conn = {
  add,
  update,
  get,
  remove,
};

module.exports = conn;
