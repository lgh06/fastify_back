
import { db } from "../../plugins/oracle11g.js";

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    // let result = await fastify.oracle11g.execute(`SELECT * FROM CRM_CustomerInfo`);
    // console.log(result);
    return "this is an example";
  })

  fastify.get('/2', async function (request, reply) {
    let conn = await this.oracle11g
    let result = conn.execute(`SELECT * FROM CRM_CustomerInfo`);
    // console.log(result);
    return result;
  })

  fastify.get('/3', async function (request, reply) {
    let conn = await this.oracle11g
    let result = await conn.execute(`SELECT * FROM CRM_CustomerInfo where rownum between 1 and 10`);

    // console.log(result);
    return result.rows;
  })

  fastify.get('/4', async function (request, reply) {
    let conn = await db()
    let result = await conn.execute(`SELECT * FROM CRM_CustomerInfo where rownum between 1 and 10`);


    return result.rows;
  })
}
