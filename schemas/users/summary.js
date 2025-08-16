'use strict'

const UsersSummaryResponse = {
  $id: 'UsersSummaryResponse',
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    resource: { type: 'string' },
    date: { type: 'string' },
    totals: {
      type: 'object',
      properties: {
        calories: { type: 'number' },
        protein: { type: 'number' },
        carbs: { type: 'number' },
        fat: { type: 'number' }
      }
    }
  }
}

const UsersSummaryQuery = {
  $id: 'UsersSummaryQuery',
  type: 'object',
  properties: { date: { type: 'string' } }
}

module.exports = [UsersSummaryResponse, UsersSummaryQuery]


