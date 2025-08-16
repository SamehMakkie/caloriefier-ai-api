'use strict'

const fp = require('fastify-plugin')
const usersMeals = require('./users/meals')
const usersMealsEaten = require('./users/mealsEaten')
const usersTargetsDaily = require('./users/targetsDaily')
const usersAdjustments = require('./users/adjustments')
const usersSummary = require('./users/summary')

async function registerSchemas (fastify) {
  const allSchemas = [
    ...usersMeals,
    ...usersMealsEaten,
    ...usersTargetsDaily,
    ...usersAdjustments,
    ...usersSummary
  ]
  for (const schema of allSchemas) {
    fastify.addSchema(schema)
  }
}

module.exports = fp(registerSchemas, { name: 'schemas' })


