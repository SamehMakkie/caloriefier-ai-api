'use strict'

const Meal = {
  $id: 'Meal',
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    calories: { type: 'number' },
    protein: { type: 'number' },
    carbs: { type: 'number' },
    fat: { type: 'number' }
  }
}

const UsersMealsListResponse = {
  $id: 'UsersMealsListResponse',
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    resource: { type: 'string' },
    date: { type: 'string' },
    items: { type: 'array', items: { $ref: 'Meal#' } }
  }
}

const UsersMealsCreateResponse = {
  $id: 'UsersMealsCreateResponse',
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    created: { type: 'boolean' },
    resource: { type: 'string' }
  }
}

const UsersMealsListQuery = {
  $id: 'UsersMealsListQuery',
  type: 'object',
  properties: {
    date: { type: 'string' }
  }
}

module.exports = [Meal, UsersMealsListResponse, UsersMealsCreateResponse, UsersMealsListQuery]


