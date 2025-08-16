"use strict";

module.exports = async function (fastify, opts) {
  // Admin user(s) only
  // Set or update cost-per-external-API-call parameter
  fastify.post("/", async function (request, reply) {
    return { ok: true, resource: "admin:api:usage:cost", updated: true };
  });
};