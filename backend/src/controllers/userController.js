const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");

const signUpNewUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const exists = await userModel.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    throw Error(
      "password needs to have a minumum length of 8 characters with 1 character each of uppercase,lowercase, numbers, and symbols."
    );
  }
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);
  const user = await userModel.create({ email, password: hash });

  res.status(200).json(user);
};

module.exports = { signUpNewUser };
