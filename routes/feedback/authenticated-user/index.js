"use strict";

module.exports = async function (fastify, opts) {
  // Get the user's feedback requires a user to be logged in
  fastify.get("/", async function (request, reply) {
    return { ok: true, resource: "feedback:authenticated-user", action: "get" };
  });

  // Post the user's feedback requires a user to be logged in
  fastify.post("/", async function (request, reply) {
    return { ok: true, resource: "feedback:authenticated-user", action: "create" };
  });
};
