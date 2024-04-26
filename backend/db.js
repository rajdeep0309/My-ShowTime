const mongoose = require("mongoose");

// const mongoURL = "mongodb://localhost:27017/your_db_name";
const mongoURL=process.env.MONGO_URL || "mongodb://localhost:27017/your_db_name";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB connected");
});

db.on("error", (err) => {
  console.log("MongoDB connection error", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//export database

module.exports = db;
