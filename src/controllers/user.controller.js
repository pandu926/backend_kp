// const sendMail = require("../config/nodemailer");
const bcrypt = require("bcrypt");
const repo = require("../services/user.service");

const registerController = async (req, res) => {
  const data_user = req.body;
  const checkNim = data_user.nim;
  const hashPassword = await bcrypt.hash(data_user.password, 10);
  const data = await repo.getUserSingleRepo({ checkNim });
  if (data) {
    return res.status(400).json({
      msg: "nim sudah terdaftar",
    });
  }

  const register_data = await repo.registerRepo(data_user, hashPassword);
  if (register_data) {
    // const subject = "confirm your register";
    // const message = `confirm your registration <a href=https://pencarikhuntuk.lol/${token}>confirm</a>`;
    // sendMail(data_user.emai, subject, message);
    return res.status(200).json(register_data);
  }
};

const getUserSingleController = async (req, res) => {
  const { id } = req.query;
  if (typeof id == "undefined") {
    const user_data = await repo.getUserSingleRepo({ id });
    return res.status(200).json(user_data);
  }
  const user_data = await repo.getUserSingleRepo({ id });
  if (user_data) {
    return res.status(200).json(user_data);
  }
  return res.status(404).json({
    msg: "tidak ada user",
  });
};

const updateController = async (req, res) => {
  const { id } = req.params;
  const data_user = req.body;
  const hashPassword = await bcrypt.hash(data_user.password, 10);
  if (data_user) {
    const update_data = await repo.updateRepo({
      id,
      data_user,
      hashPassword,
    });
    if (update_data) {
      return res.status(200).json(update_data);
    }
  }
};

const deleteController = async (req, res) => {
  const { id } = req.params;
  const delete_data = await repo.deleteRepo(id);
  if (delete_data) {
    return res.status(200).json({
      msg: "delete berhasil",
    });
  }
};

// const confirmUserController = async(req, res) => {
//     const {
//         token
//     } = req.query;
//     const data = await service.registerConfirmService(token);
//     return res.json(data);
// }

// const forgetRequstController = async(req, res) => {
//     const emailNew = req.body.email;
//     console.log(emailNew);
//     const data = await repo.getUserSingleRepo({
//         emailNew
//     });
//     if (data) {
//         const token = data.password;
//         console.log(token);
//         const subject = "forget password confirmation";
//         const message = `link to reset your password <a href=https://pencarikhuntuk.lol/${token}>confirm</a>`;
//         sendMail(emailNew, subject, message);
//         return res.status(200).json({
//             msg: "email has sent"
//         })
//     }
//     return res.status(404).json({
//         msg: "user not found"
//     });

// }

// const forgetPasswordController = async(req, res) => {
//     const {
//         forgetToken
//     } = req.body;
//     const {
//         token
//     } = req.query;

//     const data = await service.forgetPasswordService({
//         token,
//         forgetToken
//     });
//     return res.json(data);
// }

const controller = {
  registerController,
  getUserSingleController,
  updateController,
  deleteController,
  // confirmUserController,
  // forgetPasswordController,
  // forgetRequstController
};

module.exports = controller;
