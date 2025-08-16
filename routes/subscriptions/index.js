"use strict";

module.exports = async function (fastify, opts) {
  // Get the active subscription for the user
  fastify.get("/", async function (request, reply) {
    return { ok: true, resource: "subscriptions", action: "get" };
  });

  // Subscribe to only one plan
  fastify.post("/", async function (request, reply) {
    return { ok: true, resource: "subscriptions", action: "create" };
  });

  // Change the subscription to a different plan (if the user is already subscribed to a plan) whether the plan is more expensive or cheaper and cancel the old plan
  fastify.put("/", async function (request, reply) {
    return { ok: true, resource: "subscriptions", action: "update" };
  });

  // Cancel the subscription
  fastify.delete("/", async function (request, reply) {
    return { ok: true, resource: "subscriptions", action: "delete" };
  });
};
