export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    let result = await fastify.oracle11g.execute(`SELECT * FROM CRM_CustomerInfo`);
    console.log(result);
    return result.rows;
  })
}
