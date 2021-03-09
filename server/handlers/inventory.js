const db = require("../models");

module.exports.addBook = async (req, res, next) => {
  try {
    const { userName, book } = req.body;
    const user = await db.User.findOne({ username: userName });
    if (user) {
      user.inventory.push(book);
      await user.save();
      res.status(200).json({ user });
    } else {
      next(Error(`No such user exist with name ${userName}`));
    }
  } catch (err) {
    next(err);
  }
};
