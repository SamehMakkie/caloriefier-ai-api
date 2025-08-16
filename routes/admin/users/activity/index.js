"use strict";

module.exports = async function (fastify, opts) {
  // Admin user(s) only
  // Get the counts of active, new, churned users; churn rate; retention rate filtered by date range
  fastify.get("/", async function (request, reply) {
    return { ok: true, resource: "admin:users:activity" };
  });
};
