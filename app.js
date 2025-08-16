'use strict'

const path = require('node:path')
const AutoLoad = require('@fastify/autoload')
const fastifySwagger = require('@fastify/swagger')
const fastifySwaggerUi = require('@fastify/swagger-ui')
const fastifyRawBody = require('fastify-raw-body')
const registerSchemas = require('./schemas')

// Pass --options via CLI arguments in command to enable these options.
const options = {}

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  await fastify.register(fastifyRawBody, {
    field: 'rawBody',
    global: false,
    encoding: false,
    runFirst: true
  })
  await fastify.register(fastifySwagger, {
    openapi: {
      info: { title: 'Caloriefier AI API', version: '1.0.0' }
    }
  })

  await fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs'
  })

  // Register all shared schemas alongside versioned routes

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(async function (instance) {
    await instance.register(registerSchemas)
    instance.register(AutoLoad, {
      dir: path.join(__dirname, 'routes'),
      options: Object.assign({}, opts)
    })
  }, { prefix: '/v1' })
}

module.exports.options = options
