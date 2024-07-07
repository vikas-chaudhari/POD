const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
      validate: {
        validator(value) {
          if (!validator.isEmail(value))
            throw new Error("please enter valid email");
        },
      },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "NORMAL",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
module.exports = { userModel };
