"use strict";

module.exports = async function (fastify) {
  // All meals captured for a given date; default to today if not provided
  fastify.get("/", {
    schema: {
      querystring: { $ref: 'UsersMealsListQuery' },
      response: { 200: { $ref: 'UsersMealsListResponse' } }
    }
  }, async function (request, reply) {
    const { date = "today" } = request.query || {};
    return { ok: true, resource: "users:meals", date, items: [] };
  });

  // Add a meal to the user's meals (captured, not necessarily eaten)
  fastify.post("/", {
    schema: {
      body: { type: 'object' },
      response: { 200: { $ref: 'UsersMealsCreateResponse' } }
    }
  }, async function (request, reply) {
    return { ok: true, created: true, resource: "users:meals" };
  });
};


