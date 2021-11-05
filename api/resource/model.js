const db = require("../../data/dbConfig");

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources as r").where("r.resource_id", id);
}

module.exports = {
  find,
  findById,
};
