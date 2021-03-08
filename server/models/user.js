const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const validate = require("../validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: [validate.validateEmail, "Please fill a valid email address"],
  },
  about: {
    type: String,
  },
  photoLink: {
    type: String,
  },
  currentBook: {
    type: String,
  },
  // Time when the profile of the user is created
  created: {
    type: Date,
    default: Date.now,
  },
  // the list of people followed by the User
  friends: [
    {
      friend: {
        type: mongoose.Schema.Types.ObjectId,
      },
    },
  ],
  // the list of people who are following the user
  followers: [
    {
      follower: {
        type: mongoose.Schema.Types.ObjectId,
      },
    },
  ],
  // the list of books liked by the user
  // it will store the ISBN code of those books
  inventory: [
    {
      book: {
        type: String,
        required: true,
      },
    },
  ],
});

// the following method is to encrypt the password of the user before saving
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});

// to compare the password with the encrypted password
userSchema.methods.comparePassword = async function (attempt, next) {
  try {
    return await bcrypt.compare(attempt, this.password);
  } catch (err) {
    return next(err);
  }
};

module.exports = mongoose.model("User", userSchema);
