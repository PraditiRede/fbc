const db = require("../models");

module.exports.profile = async (req, res, next) => {
  try {
    var { id } = req.params;
    const user = await db.User.findById(id);
    if (user) {
      res.status(200).json({ user });
    } else {
      next(Error(`No such user exist with this name`));
    }
  } catch (err) {
    next(err);
  }
};

module.exports.updateAbout = async (req, res, next) => {
  try {
    const { userName, newAbout } = req.body;
    const user = await db.User.findOne({ username: userName });
    if (user) {
      user.about = newAbout;
      await user.save();
      res.status(200).json({ user });
    } else {
      next(Error(`No such user exist with name ${userName}`));
    }
  } catch (err) {
    next(err);
  }
};

module.exports.updatePassword = async (req, res, next) => {
  try {
    const { userName, newPassword } = req.body;
    const user = await db.User.findOne({ username: userName });
    if (user) {
      user.password = newPassword;
      await user.save();
      res.status(200).json({ user });
    } else {
      next(Error(`No such user exist with name ${userName}`));
    }
  } catch (err) {
    next(err);
  }
};

module.exports.updateCurrentBook = async (req, res, next) => {
  try {
    const { userName, book } = req.body;
    const user = await db.User.findOne({ username: userName });
    if (user) {
      user.currentBook = book;
      await user.save();
      res.status(200).json({ user });
    } else {
      next(Error(`No such user exist with name ${userName}`));
    }
  } catch (err) {
    next(err);
  }
};

module.exports.updateEmail = async (req, res, next) => {
  try {
    const { userName, book } = req.body;
    const user = await db.User.findOne({ username: userName });
    if (user) {
      user.email = email;
      await user.save();
      res.status(200).json({ user });
    } else {
      next(Error(`No such user exist with name ${userName}`));
    }
  } catch (err) {
    next(err);
  }
};
