exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      task_description: "task 1",
      task_notes: "this is task 1",
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: "task 2",
      task_notes: "this is task 2",
      task_completed: true,
      project_id: 2,
    },
  ]);
};
