"use strict";

module.exports = async function (fastify) {
  // Meals eaten on a given date
  fastify.get("/", {
    schema: {
      querystring: { $ref: 'UsersMealsEatenListQuery' },
      response: { 200: { $ref: 'UsersMealsEatenListResponse' } }
    }
  }, async function (request, reply) {
    const { date = "today" } = request.query || {};
    return { ok: true, resource: "users:meals:eaten", date, items: [] };
  });

  // Mark a meal as eaten
  fastify.post("/", {
    schema: { body: { type: 'object' }, response: { 200: { $ref: 'UsersMealsEatenCreateResponse' } } }
  }, async function (request, reply) {
    return { ok: true, created: true, resource: "users:meals:eaten" };
  });

  // Remove a specific eaten meal (but keep it in meals list)
  fastify.delete("/:mealId", {
    schema: { params: { $ref: 'UsersMealsEatenDeleteParams' }, response: { 200: { $ref: 'UsersMealsEatenDeleteResponse' } } }
  }, async function (request, reply) {
    const { mealId } = request.params;
    return { ok: true, deleted: true, resource: "users:meals:eaten", mealId };
  });
};


