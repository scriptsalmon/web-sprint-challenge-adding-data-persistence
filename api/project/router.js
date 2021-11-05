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

router.get("/:id", (req, res, next) => {
  Project.findById(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", async (req, res, next) => {
  const { project_name, project_description } = req.body;
  try {
    if(!project_name || !project_description){
      next({ status: 404, message: "name and description please" })
    } else {
      Project.create(req.body)
      .then((newProject) => {
        res.status(201).json(newProject);
      })
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
