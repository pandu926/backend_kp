const service = require("../services/sertifikat.service");

const addSertifikat = async (req, res) => {
  const data_input = req.body;
  const noSertifikat = data_input.id_sertifikat;
  const data = await service.add(data_input);
  if (data) {
    return res.status(200).json(data);
  }
  return res.status(403).send("UNAUTHORIZED");
};

const getSertifikat = async (req, res) => {
  const { id } = req.params;
  const data = await service.get(id);
  if (data) {
    return res.status(200).json(data);
  }
  return res.status(404).send("not found");
};

const updateSertifikat = async (req, res) => {
  const { id } = req.params;
  const data_input = req.body;
  const data = await service.update({ data_input, id });
  if (data) {
    return res.status(200).json(data);
  }
  return res.status(403).send("UNAUTHORIZED");
};

const deleteSertifikat = async (req, res) => {
  const { id } = req.params;
  const data = await service.remove(id);
  if (data) {
    return res.status(200).json("berhasil");
  }
  return res.status(403).send("UNAUTHORIZED");
};

const controller = {
  addSertifikat,
  getSertifikat,
  updateSertifikat,
  deleteSertifikat,
};

module.exports = controller;
