const bcrypt = require("bcrypt")
const repo = require('./user.repo');

const registerService = async (data_user) => {
    const password = data_user.password;
    const hashPassword = await bcrypt.hash(password, 10);
    // const emailNew = data_user.email;
    // const data = await repo.getUserSingleRepo({
    //     emailNew
    // });

    // if (data) {
    //     return null;
    // }
    return await repo.registerRepo(data_user, hashPassword);
}

const service = {
    registerService
}

module.exports = service;