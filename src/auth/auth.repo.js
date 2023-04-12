const {
    user
} = require("../database/models");

const authRepo = async (nim) => {
    return await user.findOne({
        where: {
            nim
        }
    })
}

module.exports = {
    authRepo
};