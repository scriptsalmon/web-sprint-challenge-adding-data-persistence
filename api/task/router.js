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

router.get("/:id", (req, res, next) => {
  Task.findById(req.params.id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  const { task_description, task_notes } = req.body;
  try {
    if (!task_description || !task_notes) {
      next({
        status: 400,
        message: "task description and notes are required, love",
      });
    } else {
      Task.create(req.body).then((newTask) => {
        res.status(201).json(newTask);
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
