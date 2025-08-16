"use strict";

module.exports = async function (fastify, opts) {
  // Get all available plans
  fastify.get("/", async function (request, reply) {
    return { ok: true, resource: "subscriptions:plans", action: "list" };
  });

  // Create a new plan for admin user(s) only
  fastify.post("/", async function (request, reply) {
    return { ok: true, resource: "subscriptions:plans", action: "create" };
  });

  // Update a plan for admin user(s) only
  fastify.put("/", async function (request, reply) {
    return { ok: true, resource: "subscriptions:plans", action: "update" };
  });

  // Delete a plan for admin user(s) only
  fastify.delete("/", async function (request, reply) {
    return { ok: true, resource: "subscriptions:plans", action: "delete" };
  });
};
