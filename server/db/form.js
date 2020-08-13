const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    mobile: {
      type: String,
    },
    message: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("forms", formSchema);
