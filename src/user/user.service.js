const bcrypt = require("bcrypt")
const repo = require('./user.repo');

const registerService = async (data_user) => {
    const password = data_user.password;
    const hashPassword = await bcrypt.hash(password, 10);
    const nimNew = data_user.nim;
    const data = await repo.getUserSingleRepo({
        nimNew
    });

    if (data) {
        return null;
    }
    return await repo.registerRepo(data_user, hashPassword);
}

const getUserSingleService = async (id) => {
    return await repo.getUserSingleRepo({
        id
    });
}

const updateService = async (id, data_user) => {
    const password = data_user.password;
    const hashPassword = await bcrypt.hash(password, 10);
    return await repo.updateRepo({
        id,
        data_user,
        hashPassword
    });
}

const deleteService = async (id) => {
    return await repo.deleteRepo(id);
}
const service = {
    registerService,
    getUserSingleService,
    updateService,
    deleteService
}

module.exports = service;