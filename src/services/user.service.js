const { where } = require("sequelize");
const { user } = require("../database/models");

const registerRepo = async (data_user, hashPassword) => {
  // const is_active = "nonactive";
  const password = hashPassword;

  const { nim, nama } = data_user;

  return await user.create({
    nim,
    nama,
    password,
  });
};

const getUserSingleRepo = async ({ id, checkNim }) => {
  const nim = checkNim;
  console.log(nim, id);
  if (typeof nim == "undefined") {
    return await user.findOne({
      where: {
        id,
      },
    });
  } else {
    return await user.findOne({
      where: {
        nim,
      },
    });
  }
};

const updateRepo = async ({ id, data_user, hashPassword }) => {
  const password = hashPassword;
  const { nim, nama } = data_user;

  return await user.update(
    {
      nim,
      nama,
      password,
    },
    {
      where: {
        id,
      },
      returning: true,
    }
  );
};

const deleteRepo = async (id) => {
  return await user.destroy({
    where: {
      id,
    },
  });
};
const repo = {
  registerRepo,
  getUserSingleRepo,
  updateRepo,
  deleteRepo,
};

module.exports = repo;
