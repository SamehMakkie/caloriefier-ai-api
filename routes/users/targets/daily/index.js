"use strict";

module.exports = async function (fastify) {
  // Day-specific targets override; prefer ?date=YYYY-MM-DD or ?date=today
  fastify.get("/", {
    schema: {
      querystring: { $ref: 'UsersTargetsDailyQuery' },
      response: { 200: { $ref: 'UsersTargetsDailyResponse' } }
    }
  }, async function (request, reply) {
    const { date = "today" } = request.query || {};
    return {
      ok: true,
      resource: "users:targets:daily",
      date,
      targets: { calories: 0, protein: 0, carbs: 0, fat: 0, temporary: false },
    };
  });

  // Create a daily override for the date (e.g., free diet day)
  fastify.post("/", { schema: { body: { $ref: 'UsersTargetsDailyMutationBody' }, response: { 200: { $ref: 'MutationResponse' } } } }, async function (request, reply) {
    return { ok: true, created: true, resource: "users:targets:daily" };
  });

  // Update the daily override
  fastify.put("/", { schema: { body: { $ref: 'UsersTargetsDailyMutationBody' }, response: { 200: { $ref: 'MutationResponse' } } } }, async function (request, reply) {
    return { ok: true, updated: true, resource: "users:targets:daily" };
  });

  // Remove the daily override
  fastify.delete("/", { schema: { response: { 200: { $ref: 'MutationResponse' } } } }, async function (request, reply) {
    return { ok: true, deleted: true, resource: "users:targets:daily" };
  });
};


