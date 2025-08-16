"use strict";

module.exports = async function (fastify) {
  // Combined historical stats and average via query flags
  fastify.get("/stats", async function (request, reply) {
    return { ok: true, resource: "users:history:stats" };
  });

  fastify.get("/average", async function (request, reply) {
    return { ok: true, resource: "users:history:average" };
  });
};


