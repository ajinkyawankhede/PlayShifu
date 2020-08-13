const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var jwt = require("jsonwebtoken");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateJwt = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      expiresIn: Date.now() + 86400000,
    },
    "playshifu"
  );
};

module.exports = mongoose.model("user", userSchema);
