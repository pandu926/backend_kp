const {
    authRepo
} = require("./auth.repo");

const authService = async (nim) => {
    return await authRepo(nim);
}

module.exports = {
    authService
};