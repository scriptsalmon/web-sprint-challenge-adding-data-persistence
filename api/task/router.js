const express = require("express");
const Task = require("./model.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  Task.find()
    .then((task) => {
      res.json(task);
    })
    .catch(next);
});

module.exports = router;
