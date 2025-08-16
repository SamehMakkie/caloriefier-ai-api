"use strict";

module.exports = async function (fastify, opts) {
  // Get the user's contact me form which includes a name, email, subject and message
  fastify.get("/", async function (request, reply) {
    return { ok: true, resource: "feedback:contact", action: "get" };
  });

  // Post the user's contact me form which includes a name, email, subject and message
  fastify.post("/", async function (request, reply) {
    return { ok: true, resource: "feedback:contact", action: "create" };
  });
};
