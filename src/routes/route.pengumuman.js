const express = require("express");
const pengumumanRoute = express.Router();
const conn = require("../controllers/pengumuman.controller");

pengumumanRoute.get("/pengumuman", (req, res) => {
  return res.send("seminar");
});

pengumumanRoute.post("/pengumuman", conn.add);
pengumumanRoute.get("/pengumuman/list", conn.get);
pengumumanRoute.put("/pengumuman/update/:id", conn.update);
pengumumanRoute.delete("/pengumuman/delete/:id", conn.remove);

module.exports = pengumumanRoute;
