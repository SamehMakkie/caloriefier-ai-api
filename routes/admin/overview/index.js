"use strict";

module.exports = async function (fastify, opts) {
  // Admin user(s) only
  // Get the active users, total revenue, ARPU, API calls & cost, net profit filtered by date range
  fastify.get("/", async function (request, reply) {
    return { ok: true, resource: "admin:overview" };
  });
};
