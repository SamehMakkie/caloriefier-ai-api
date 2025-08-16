'use strict'

const UsersAdjustmentsListResponse = {
  $id: 'UsersAdjustmentsListResponse',
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    resource: { type: 'string' },
    date: { type: 'string' },
    items: { type: 'array', items: { type: 'object' } }
  }
}

const UsersAdjustmentsListQuery = {
  $id: 'UsersAdjustmentsListQuery',
  type: 'object',
  properties: { date: { type: 'string' } }
}

const UsersAdjustmentsCreateBody = {
  $id: 'UsersAdjustmentsCreateBody',
  type: 'object',
  additionalProperties: true
}

const UsersAdjustmentsCreateResponse = {
  $id: 'UsersAdjustmentsCreateResponse',
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    created: { type: 'boolean' },
    resource: { type: 'string' },
    id: { type: 'string' }
  }
}

const UsersAdjustmentsDeleteParams = {
  $id: 'UsersAdjustmentsDeleteParams',
  type: 'object',
  properties: { adjustmentId: { type: 'string' } },
  required: ['adjustmentId']
}

const UsersAdjustmentsDeleteResponse = {
  $id: 'UsersAdjustmentsDeleteResponse',
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    deleted: { type: 'boolean' },
    resource: { type: 'string' },
    id: { type: 'string' }
  }
}

module.exports = [
  UsersAdjustmentsListResponse,
  UsersAdjustmentsListQuery,
  UsersAdjustmentsCreateBody,
  UsersAdjustmentsCreateResponse,
  UsersAdjustmentsDeleteParams,
  UsersAdjustmentsDeleteResponse
]


