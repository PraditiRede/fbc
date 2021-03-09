const db = require("../models");

module.exports.addFriend = async (req, res, next) => {
  try {
    const { friendName, userName } = req.body;
    const user = await db.User.findOne({ username: userName });
    if (user) {
      const friend = await db.User.findOne({ username: friendName });
      if (friend) {
        user.friends.push(friendName);
        friend.followers.push(userName);
        await user.save();
        await friend.save();
        res.status(200).json({ user });
      } else {
        next(Error(`No user account exist with name ${friendName}`));
      }
    } else {
      next(Error(`No user account exist with name ${userName}`));
    }
  } catch (err) {
    next(err);
  }
};

module.exports.removeFriend = async (req, res, next) => {
  try {
    const { friendName, userName } = req.body;
    const user = await db.User.findOne({ username: userName });
    if (user) {
      const friend = await db.User.findOne({ username: friendName });
      if (friend) {
        const friendIndex = user.friends.findIndex(
          (element) => element === friendName
        );
        const userIndex = friend.followers.findIndex(
          (element) => element === userName
        );
        if (friendIndex !== -1) {
          user.friends.splice(friendIndex, 1);
          await user.save();
          if (userIndex !== -1) {
            friend.followers.splice(userIndex, 1);
            await friend.save();
            res.status(200).json({ user });
          } else {
            next(Error(`No follower was found with name ${userName}`));
          }
        } else {
          next(Error(`No friend was found with name ${friendName}`));
        }
      } else {
        next(Error(`No account exist by the name of ${friendName}`));
      }
    } else {
      next(Error(`No user account exist with name ${userName}`));
    }
  } catch (err) {
    next(err);
  }
};
