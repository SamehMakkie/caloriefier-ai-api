"use strict";

module.exports = async function (fastify) {
  fastify.get("/info", async function () {
    return { ok: true, resource: "users:account:info" };
  });
};


