"use strict";

module.exports = async function (fastify, opts) {
  // Admin user(s) only
  // Get the latest insights report (if any) by default return the last 12 months if no date range is provided
  fastify.get("/", async function (request, reply) {
    return { ok: true, resource: "admin:insights" };
  });
};