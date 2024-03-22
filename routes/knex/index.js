import {knexMssql, knexOracle} from "../../helpers/index.mjs";

export default async function (fastify, opts) {
  fastify.get('/1', async function (request, reply) {
    let result = await knexOracle.select(knexOracle.raw("id,name")).fromRaw("CRM_CustomerInfo").orderByRaw("id asc").limit(20);
    return result;
  })

  fastify.get('/2', async function (request, reply) {
    let result = await knexMssql.select("*").from(`UFDATA_999_2018.dbo.CusDeliverAdd`).orderBy("id","desc").limit(10);
    return result;
  })
}
