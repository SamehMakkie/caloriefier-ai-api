"use strict";

module.exports = async function (fastify) {
  // Default targets (apply every day until changed)
  fastify.get("/", async function (request, reply) {
    return {
      ok: true,
      resource: "users:targets",
      targets: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    };
  });
};


