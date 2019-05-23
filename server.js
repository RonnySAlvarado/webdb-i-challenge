const express = require("express");
const db = require("./data/accounts-model.js");
const server = express();

server.use(express.json());

server.get("/test", async (req, res) => {
  try {
    const getInfo = await db.find();
    if (getInfo) {
      res.status(200).json(getInfo);
    } else {
      res.status(400).json({ message: "No users" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong with this request." });
  }
});

server.post("/test", async (req, res) => {
  try {
    console.log(req.body);
    // const account = req.body;
    const addInfo = await db.add(req.body);
    if (addInfo) {
      res.status(201).json(addInfo);
    } else {
      res.status(400).json({ message: "Failed to add" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something really went wrong with this request." });
  }
});

server.delete("/test/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteInfo = await db.remove(id);
    if (deleteInfo) {
      res.status(200).json(deleteInfo);
    } else {
      console.log("Something");
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something really went wrong with this request." });
  }
});
module.exports = server;

//initial commit
