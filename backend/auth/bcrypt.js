const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
     try {
          const salt = bcrypt.genSaltSync(10);
          const hashedPassword = bcrypt.hashSync(await password, salt);
          return hashedPassword;
     } catch (error) {
          console.log(error);
     }
}

const checkPassword = (password, hashedPassword) => {
     const checkResult = bcrypt.compareSync(password, hashedPassword);
     return checkResult;
}

module.exports = {
     hashPassword,
     checkPassword
}