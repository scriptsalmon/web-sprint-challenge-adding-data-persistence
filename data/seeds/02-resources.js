exports.seed = function (knex) {
  return knex("resources").insert([
    {
      resource_name: "Master Roshi",
      resource_description:
        "Master Roshi, also known as the Turtle Hermit or Jackie Chun, is a master of martial arts, who trained Gohan, Ox-King, Goku, Krillin, and Yamcha. He has a sister named Fortuneteller Baba.",
    },
  ]);
};
