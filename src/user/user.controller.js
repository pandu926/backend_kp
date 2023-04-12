// const sendMail = require("../config/nodemailer");
const service = require("./user.service");
const repo = require("./user.repo")

const registerController = async (req, res) => {

    const data_user = req.body;
    console.log(data_user);
    const register_data = await service.registerService(data_user);
    // const token = register_data.password;
    if (register_data) {
        // const subject = "confirm your register";
        // const message = `confirm your registration <a href=https://pencarikhuntuk.lol/${token}>confirm</a>`;
        // sendMail(data_user.emai, subject, message);
        return res.status(200).json(register_data);

    }
    return res.status(400).json({
        msg: "email sudah terdaftar"
    });

}

const getUserSingleController = async (req, res) => {
    const {
        id
    } = req.params;

    const user_data = await service.getUserSingleService(id);
    if (user_data) {
        return res.status(200).json(user_data);
    }
    return res.status(404).json({
        msg: "tidak ada user"
    });

}

const updateController = async (req, res) => {
    const {
        id
    } = req.auth;
    const data_user = req.body;
    if (data_user) {
        const update_data = await service.updateService(id, data_user);
        if (update_data) {
            return res.status(200).json(update_data);
        }
    }


}

const deleteController = async (req, res) => {
    const {
        id
    } = req.params;

    const delete_data = await service.deleteService(id);
    return res.status(200).json({
        msg: "delete berhasil"
    })
}

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
    deleteController
    // confirmUserController,
    // forgetPasswordController,
    // forgetRequstController
}

module.exports = controller;