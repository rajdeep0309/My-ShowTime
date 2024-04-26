const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const superSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide UserName"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide Password"],
    minlength: 6,
  },
});

superSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

superSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

superSchema.methods.getToken = function () {
  return jwt.sign({ id: this._id }, "SUPER@ IS", { expiresIn: "3d" });
};
const Super = mongoose.model("Super", superSchema);

module.exports = Super;
