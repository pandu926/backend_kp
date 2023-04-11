const {
    user
} = require('../database/models');

const registerRepo = async (data_user, hashPassword) => {
    // const is_active = "nonactive";
    const password = hashPassword;
    const {
        nim,
        nama
    } = data_user;

    return await user.create({
        nim,
        nama,
        password,

    })
}

const getUserSingleRepo = async ({
    user_id,
    emailNew,
    token
}) => {
    const email = emailNew || 0;
    const id = user_id || 9999;
    const password = token || 0;
    if (password === 0) {
        if (email === 0) {
            return await user.findOne({
                where: {
                    id
                }
            })
        }
        if (id === 9999) {
            return await user.findOne({
                where: {
                    email
                }
            })
        }
    } else {
        return await user.findOne({
            where: {
                password
            }
        })
    }
}


const repo = {
    registerRepo,
    getUserSingleRepo
}

module.exports = repo;