const express = require("express");
const seminarRoute = express.Router();
const conn = require("../controllers/seminar.controller");

seminarRoute.get("/seminar", (req, res) => {
  return res.send("seminar");
});
seminarRoute.post("/seminar/add", conn.addSeminar);
seminarRoute.get("/seminar/:id", conn.getSeminar);
seminarRoute.put("/seminar/update/:id", conn.updateSeminar);
seminarRoute.delete("/seminar/delete/:id", conn.deleteSeminar);

module.exports = seminarRoute;
