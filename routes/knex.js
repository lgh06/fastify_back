import {knexMssql, knexOracle} from "../helpers/index.mjs";

export default async function (fastify, opts) {
  fastify.get('/1', async function (request, reply) {
    let result = await knexOracle.select("*").fromRaw("CRM_CustomerInfo");
    return result;
  })

  fastify.get('/2', async function (request, reply) {
    let result = await knexMssql.select(["EnumCode","EnumType"]).from(`UFMeta_104.dbo.AA_Enum`);
    return result;
  })
}
