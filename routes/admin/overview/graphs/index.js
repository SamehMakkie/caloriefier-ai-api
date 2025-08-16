"use strict";

module.exports = async function (fastify, opts) {
  // Admin user(s) only
  // Get Time-series for active users & revenue filtered by date range
  fastify.get("/", async function (request, reply) {
    return { ok: true, resource: "admin:overview:graphs" };
  });
};