const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());

const Person = require("./models/person");

app.get("/", (req, res) => {
  res.send("welcome the server");
});

app.post("/register", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("data saved", response);
    res.send(response);
  } catch (err) {
    console.log(err);
  }
});

app.get("/register", async (req, res) => {
  try {
    const data = await Person.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
