"use strict";

module.exports = async function (fastify, opts) {
  // Get the status of the subscription for the user
  fastify.get("/", async function (request, reply) {
    return { ok: true, resource: "subscriptions:status" };
  });
};
