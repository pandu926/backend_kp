const { user } = require("../database/models");

module.exports.authService = async (nim) => {
  console.log(nim);
  return await user.findOne({
    where: {
      nim,
    },
  });
};
