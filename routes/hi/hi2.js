'use strict'
// this file is not a route
module.exports = async function (fastify, opts) {

  fastify.get('/hello', function (request, reply) {
    // curl ${app-url}/example/12345
    // userId === '12345'
    const { userId } = request.params;
    // your code here
    console.log(userId)
    reply.send({ hello: 'world', uid: userId })
  })
}