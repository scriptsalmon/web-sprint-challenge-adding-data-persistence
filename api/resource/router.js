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

router.get("/:id", (req, res, next) => {
  Resource.findById(req.params.id)
    .then((resource) => {
      res.json(resource);
    })
    .catch(next);
});



module.exports = router;
