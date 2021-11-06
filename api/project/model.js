const db = require("../../data/dbConfig");

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects as p").where("p.project_id", id);
}

async function create(project) {
  const [project_id] = await db("projects").insert(project);
  return findById(project_id).first();
}

module.exports = {
  find,
  findById,
  create,
};
