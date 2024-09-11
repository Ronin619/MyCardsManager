const usersModel = require("../models/usersModel");
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
    const exists = await usersModel.findOne({ email });

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
    const user = await usersModel.create({ email, password: hash });
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logInUser = async (req, res) => {
  const { email, password } = req.body;

  const start = Date.now();
  console.log("Login request received");

  try {
    console.log("Fetching user");
    const fetchStart = Date.now();
    const user = await usersModel.findOne({ email });
    console.log(`Fetch user time: ${Date.now() - fetchStart}ms`);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    console.log("Checking password");
    const passwordStart = Date.now();
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(`Password check time: ${Date.now() - passwordStart}ms`);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    console.log("Generating token");
    const tokenStart = Date.now();
    const token = createToken(user._id);
    console.log(`Token generation time: ${Date.now() - tokenStart}ms`);

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
    });

    res.status(200).json({ message: "Login successful", token });
    console.log(`Processing time: ${Date.now() - start}ms`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logoutUser = (req, res) => {
  res.cookie("authToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logout successful" });
};

module.exports = { signUpNewUser, logInUser, logoutUser };
