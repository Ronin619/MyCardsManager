const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

// Generate jwt token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

const signUpNewUser = async (req, res) => {
  const { email, password } = req.body;

  try {
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
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // checks if all fields have been filled
    if (!email || !password) {
      throw Error("All fields must be filled.");
    }

    const user = await userModel.findOne({ email });
    // checks if the user exist by provided email
    if (!user) {
      throw Error("Invalid email");
    }

    const validUserPassword = await bcrypt.compare(password, user.password);
    // checks if the password is correct
    if (!validUserPassword) {
      throw Error("Incorrect password");
    }
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signUpNewUser, logInUser };
