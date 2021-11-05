exports.seed = function (knex) {
  return knex("projects").insert([
    {
      project_name: "Spirit Bomb",
      project_description: "Unlock new technique",
      project_completed: false,
    },
    {
      project_name: "Clean Streets",
      project_description: "Pick up litter",
      project_completed: true,
    },
  ]);
};
