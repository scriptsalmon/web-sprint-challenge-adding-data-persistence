const db = require("../../data/dbConfig");

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources as r").where("r.resource_id", id);
}

async function create(resource) {
  const [resource_id] = await db("resources").insert(resource)
  return findById(resource_id).first();
}

module.exports = {
  find,
  findById,
  create
};
