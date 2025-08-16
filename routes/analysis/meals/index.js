"use strict";

module.exports = async function (fastify) {
  // Create an analysis from an uploaded meal image
  fastify.post("/", async function (request, reply) {
    return { ok: true, resource: "analysis:meals" };
  });
};


