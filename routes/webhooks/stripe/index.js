"use strict";

module.exports = async function (fastify) {
  // Stripe webhooks should be POST and often require raw body verification
  fastify.post("/", {
    config: { rawBody: true }
  }, async function (request, reply) {
    // request.rawBody is available for signature verification
    return { received: true, provider: "stripe", hasRaw: Boolean(request.rawBody) };
  });
};


