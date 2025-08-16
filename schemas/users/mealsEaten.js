'use strict'

const UsersMealsEatenListResponse = {
  $id: 'UsersMealsEatenListResponse',
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    resource: { type: 'string' },
    date: { type: 'string' },
    items: { type: 'array', items: { type: 'object' } }
  }
}

const UsersMealsEatenListQuery = {
  $id: 'UsersMealsEatenListQuery',
  type: 'object',
  properties: {
    date: { type: 'string' }
  }
}

const UsersMealsEatenCreateResponse = {
  $id: 'UsersMealsEatenCreateResponse',
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    created: { type: 'boolean' },
    resource: { type: 'string' }
  }
}

const UsersMealsEatenDeleteParams = {
  $id: 'UsersMealsEatenDeleteParams',
  type: 'object',
  properties: { mealId: { type: 'string' } },
  required: ['mealId']
}

const UsersMealsEatenDeleteResponse = {
  $id: 'UsersMealsEatenDeleteResponse',
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    deleted: { type: 'boolean' },
    resource: { type: 'string' },
    mealId: { type: 'string' }
  }
}

module.exports = [
  UsersMealsEatenListResponse,
  UsersMealsEatenListQuery,
  UsersMealsEatenCreateResponse,
  UsersMealsEatenDeleteParams,
  UsersMealsEatenDeleteResponse
]


