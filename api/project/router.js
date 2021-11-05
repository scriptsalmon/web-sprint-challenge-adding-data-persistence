const express = require("express");
const Project = require("./model.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  Project.find()
    .then((project) => {
      res.json(project);
    })
    .catch(next);
});

module.exports = router;
