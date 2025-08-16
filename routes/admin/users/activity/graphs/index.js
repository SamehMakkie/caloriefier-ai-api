"use strict";

module.exports = async function (fastify, opts) {
  // Admin user(s) only
  // Get Time-series: active users, new users, daily churn, retention over time filtered by date range
  fastify.get("/", async function (request, reply) {
    return { ok: true, resource: "admin:users:activity:graphs" };
  });
};
