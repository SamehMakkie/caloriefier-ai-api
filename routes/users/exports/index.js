"use strict";

module.exports = async function (fastify) {
  // Export PDFs for historical data
  fastify.get("/pdf", async function (request, reply) {
    return { ok: true, resource: "users:exports:pdf" };
  });
};


