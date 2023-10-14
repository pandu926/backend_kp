const service = require("../services/seminar.service");

const addSeminar = async (req, res) => {
  const data_seminar = req.body;
  try {
    const data = await service.add(data_seminar);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(403).send("WRONG");
  }
};
const getSeminar = async (req, res) => {
  const { id } = req.query;
  if (typeof id == "undefined") {
    const data = await service.get(id);
    return res.status(200).json(data);
  }
  const data = await service.get(id);
  if (data) {
    return res.status(200).json(data);
  }
  return res.status(404).send("tidak ada");
};
const updateSeminar = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const respone = await service.update(id, data);
  if (respone) {
    return res.status(200).json(data);
  }
  return res.status(404).send("tidak ada");
};
const deleteSeminar = async (req, res) => {
  const { id } = req.params;
  const respone = await service.remove(id);
  if (respone) {
    return res.status(200).json("delete sukses");
  }
  return res.status(404).send("tidak ada");
};

const getSeminarLatest = async (req, res) => {
  const respone = await service.seminarLatest();
  if (respone) {
    return res.status(200).json(respone);
  }
  return res.status(404).send("tidak ada");
};

const conn = {
  addSeminar,
  getSeminar,
  updateSeminar,
  deleteSeminar,
  getSeminarLatest,
};

module.exports = conn;
