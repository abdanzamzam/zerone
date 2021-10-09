const { hashPassword } = require("../auth/bcrypt");
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
        password: hashPassword(await req.body.password),
      };

      const data = await User.create(payload);
      
      res.status(200).json({
           status: 200,
           message: "success",
           data: {
                access_token: data.dataValues
           }
      })
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
