exports.up = function(knex) {
  return knex.schema.createTable('project', (table) => {
    table.increments('project_id');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project');
};
