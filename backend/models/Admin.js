const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const adminSchema = new mongoose.Schema({
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

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

adminSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

adminSchema.methods.getToken = function () {
  return jwt.sign({ id: this._id }, "ADMIN@ IS", { expiresIn: "3d" });
};
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
