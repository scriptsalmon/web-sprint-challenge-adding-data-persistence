const db = require("../../data/dbConfig.js");

function find() {
  return db("tasks");
}

function findById(id) {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_notes",
      "t.task_description",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    )
    .where("t.task_id", id);
}

async function create(task) {
  const [task_id] = await db("tasks").insert(task);
  return findById(task_id).first();
}

module.exports = {
  find,
  findById,
  create,
};
