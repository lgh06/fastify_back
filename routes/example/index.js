
import { Oracle11gConn as oracle11g} from "../../plugins/oracle11g.js";
import { mssql} from "../../plugins/mssql.js";

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    // let result = await fastify.oracle11g.execute(`SELECT * FROM CRM_CustomerInfo`);
    // console.log(result);
    return "this is an example";
  })

  fastify.get('/2', async function (request, reply) {
    let conn = await this.oracle11g()
    let result = conn.execute(`SELECT * FROM CRM_CustomerInfo`);
    // console.log(result);
    return result;
  })

  fastify.get('/3', async function (request, reply) {
    let conn = await this.oracle11g()
    let result = await conn.execute(`SELECT * FROM CRM_CustomerInfo where rownum between 1 and 10`);

    // console.log(result);
    return result.rows;
  })

  fastify.get('/4', async function (request, reply) {
    let conn = await oracle11g()
    let result = await conn.execute(`SELECT * FROM CRM_CustomerInfo where rownum between 1 and 10`);


    return result.rows;
  })


  fastify.get('/5', async function (request, reply) {

    const result = await mssql.query`select * from AA_Bank `
    return result
    
  })

  fastify.get('/6', async function (request, reply) {

    const result = await this.mssql.query`select * from AA_Bank `
    return result
    
  })


}
