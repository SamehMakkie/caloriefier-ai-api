'use strict'

const Targets = {
  $id: 'Targets',
  type: 'object',
  properties: {
    calories: { type: 'number' },
    protein: { type: 'number' },
    carbs: { type: 'number' },
    fat: { type: 'number' },
    temporary: { type: 'boolean' }
  }
}

const UsersTargetsDailyResponse = {
  $id: 'UsersTargetsDailyResponse',
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    resource: { type: 'string' },
    date: { type: 'string' },
    targets: { $ref: 'Targets#' }
  }
}

const UsersTargetsDailyQuery = {
  $id: 'UsersTargetsDailyQuery',
  type: 'object',
  properties: { date: { type: 'string' } }
}

const UsersTargetsDailyMutationBody = {
  $id: 'UsersTargetsDailyMutationBody',
  type: 'object',
  additionalProperties: true
}

const MutationResponse = {
  $id: 'MutationResponse',
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    created: { type: 'boolean' },
    updated: { type: 'boolean' },
    deleted: { type: 'boolean' },
    resource: { type: 'string' }
  }
}

module.exports = [
  Targets,
  UsersTargetsDailyResponse,
  UsersTargetsDailyQuery,
  UsersTargetsDailyMutationBody,
  MutationResponse
]


