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

router.post("/", async (req, res, next) => {
  const { resource_name, resource_description } = req.body;
  try {
    if(!resource_name || !resource_description) {
      next({ status: 400, message: "please include resource name and description, beautiful" })
    } else {
      Resource.create(req.body)
        .then(newResource => {
          res.status(201).json(newResource);
        })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router;
