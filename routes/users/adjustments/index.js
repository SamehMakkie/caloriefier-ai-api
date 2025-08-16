"use strict";

module.exports = async function (fastify) {
  // Manual adjustments (add/subtract) to a day's macronutrients
  fastify.get("/", { schema: { querystring: { $ref: 'UsersAdjustmentsListQuery' }, response: { 200: { $ref: 'UsersAdjustmentsListResponse' } } } }, async function (request, reply) {
    const { date = "today" } = request.query || {};
    return { ok: true, resource: "users:adjustments", date, items: [] };
  });

  fastify.post("/", { schema: { body: { $ref: 'UsersAdjustmentsCreateBody' }, response: { 200: { $ref: 'UsersAdjustmentsCreateResponse' } } } }, async function (request, reply) {
    return { ok: true, created: true, resource: "users:adjustments", id: "adj_123" };
  });

  fastify.delete("/:adjustmentId", { schema: { params: { $ref: 'UsersAdjustmentsDeleteParams' }, response: { 200: { $ref: 'UsersAdjustmentsDeleteResponse' } } } }, async function (request, reply) {
    const { adjustmentId } = request.params;
    return { ok: true, deleted: true, resource: "users:adjustments", id: adjustmentId };
  });
};


