"use strict";

module.exports = async function (fastify) {
  // Summary for a given date; use ?date=today or YYYY-MM-DD
  fastify.get("/", {
    schema: {
      querystring: { $ref: 'UsersSummaryQuery' },
      response: { 200: { $ref: 'UsersSummaryResponse' } }
    }
  }, async function (request) {
    const { date = "today" } = request.query || {};
    return { ok: true, resource: "users:summary", date, totals: { calories: 0, protein: 0, carbs: 0, fat: 0 } };
  });
};


