require("dotenv");
const {
    authService
} = require("./auth.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const authController = async (req, res) => {
    const {
        nim,
        password
    } = req.body;
    const userData = await authService(nim);
    if (!userData) {
        return res.status(404).send({
            msg: "data tidak ada"
        });
    }

    // const isActive = userData.is_active;
    // if (isActive == "nonactive") {
    //     return res.status(400).send({
    //         msg: "konfirmasi email dahulu"
    //     });
    // }

    const isPassword = await bcrypt.compare(password, userData.password);
    if (isPassword) {
        const token = await jwt.sign({
                id: userData.id,
                nama: userData.name,
                nim: userData.nim
            },
            process.env.JWT_SECRET_TOKEN, {
                expiresIn: "1d"
            }
        );
        return res.status(200).json({
            accessToken: token
        });
    } else {
        return res.status(403).send({
            msg: "password salah"
        });
    }

}

module.exports = {
    authController
};