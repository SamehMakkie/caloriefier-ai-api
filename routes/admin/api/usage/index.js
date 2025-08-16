"use strict";

module.exports = async function (fastify, opts) {
  // Admin user(s) only
  // Get Total external-API calls & estimated cost filtered by date range
  fastify.get("/", async function (request, reply) {
    return { ok: true, resource: "admin:api:usage" };
  });
};
