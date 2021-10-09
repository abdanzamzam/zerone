const { User } = require("../models");

class UserController {
  static login(req, res) {}

  static async register(req, res) {
    try {
      const data = await User.create(req.body);
      console.log(data.dataValues);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
