"use strict";

module.exports = async function (fastify) {
  // Queue/run a job to generate an insights report
  fastify.post("/", async function (request, reply) {
    return { ok: true, resource: "admin:insight-jobs", jobId: "job_123" };
  });
};


