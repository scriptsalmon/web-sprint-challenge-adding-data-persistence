const express = require("express");
const Resource = require("./model.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  Resource.find()
    .then((resource) => {
      res.json(resource);
    })
    .catch(next);
});

module.exports = router;
