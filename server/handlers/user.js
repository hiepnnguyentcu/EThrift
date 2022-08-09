const {
  User,
  validateUser,
  validateUserCreatedByAdmin,
} = require("../models/user");
const { ROLES } = require("../constants/role");

const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      handle: req.body.handle,
    };

    const { error } = validateUser(userData);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    let user = await User.findOne({ email: userData.email }).exec();

    if (user) {
      return res.status(400).json({ mesasge: "Email already exists!" });
    }

    user = await User.findOne({ handle: userData.handle }).exec();

    if (user) {
      return res.status(400).json({ mesasge: "User handle already exists!" });
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    user = new User(userData);

    await user.save();

    return res.status(200).json({
      userData: user.getUserData(),
      tokens: {
        accessToken: user.generateJWT(),
        refreshToken: user.refreshToken,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.signIn = async (req, res) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    let user = await User.findOne({ email: userData.email }).exec();

    if (!user) {
      return res.status(400).json({ message: "User doesn't exists!" });
    }

    let match = await bcrypt.compare(userData.password, user.password);

    if (match) {
      return res.status(200).json({
        userData: user.getUserData(),
        tokens: {
          accessToken: user.generateJWT(),
          refreshToken: user.refreshToken,
        },
      });
    } else {
      return res.status(400).json({ message: "Wrong password" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.signUpByAdmin = async (req, res) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      handle: req.body.handle,
    };

    const { error } = validateUserCreatedByAdmin(userData);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    let user = await User.findOne({ email: userData.email }).exec();

    if (user) {
      return res.status(400).json({ mesasge: "Email already exists!" });
    }

    user = await User.findOne({ handle: userData.handle }).exec();

    if (user) {
      return res.status(400).json({ mesasge: "User handle already exists!" });
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    user = new User(userData);

    await user.save();

    return res.status(200).json({
      userData: user.getUserData(),
      tokens: {
        accessToken: user.generateJWT(),
        refreshToken: user.refreshToken,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getUserInfo = async (req, res) => {
  if (req.user.role != ROLES.ADMIN_ID) {
    if (req.user.handle != req.params.userHandle) {
      return res.status(400).json({ message: "User not allowed" });
    }
  }

  const user = await User.findOne({ handle: req.params.userHandle }).exec();

  return res.status(200).json({
    userData: user.getUserData(),
    tokens: {
      refreshToken: user.refreshToken,
    },
  });
};

exports.getAllUsers = async (req, res) => {
  if (req.user.role != ROLES.ADMIN_ID) {
    return res.status(400).json({ message: "User not allowed" });
  }

  const user = await User.find().exec();

  const responseData = user.map((doc) => {
    return {
      userData: doc.getUserData(),
      tokens: {
        refreshToken: doc.refreshToken,
      },
    };
  });

  return res.status(200).json(responseData);
};

exports.getJWT = async (req, res) => {
  try {
    const user = await User.findOne({ handle: req.user.handle }).exec();

    const JWT = user.generateJWT();

    return res.status(200).json({ accessToken: JWT });
  } catch {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
