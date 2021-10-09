const { hashPassword } = require("../auth/bcrypt");
const { generateToken } = require("../auth/token");
const { User } = require("../models");

class UserController {
  static login(req, res) {}

  static async register(req, res) {
    try {
      let payload = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: await hashPassword(req.body.password),
      };

      const {dataValues} = await User.create(payload);
      const access_token = await generateToken({
          firstName: dataValues.firstName,
          lastName: dataValues.lastName,
          userName: dataValues.userName,
          email: dataValues.email
      })

      res.status(200).json({
           status: 200,
           message: "User created successfully",
           data: {
                access_token: access_token
           }
      })
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
