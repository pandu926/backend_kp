const {
    pendaftaran_Seminar
} = require('../database/models');

const registerRepo = async ({
    id_user,
    id_seminar,
    status
}) => {

    return await pendaftaran_Seminar.create({
        id_user,
        id_seminar,
        status,
    });

}

const getDataSingleRepo = async (id) => {
    return await pendaftaran_Seminar.findOne({
        where: {
            id
        }
    })
}

const getDataAllRepo = async () => {
    return await pendaftaran_Seminar.findAll();
}

const repo = {
    registerRepo,
    getDataSingleRepo,
    getDataAllRepo
}
module.exports = repo;