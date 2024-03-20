import fp from 'fastify-plugin'

import mssql from "mssql";

import * as CONFIG from '../CONFIG.js';


async function run2(){

  try {
    // make sure that any items are correctly URL encoded in the connection string
    await mssql.connect(CONFIG.MSSQL_DB_CONN_STR);

  } catch (err) {
      // ... error checks
  }
}


function fastifyMSSql(fastify, options, done) {
  run2().then(()=>{
    fastify.decorate('mssql', mssql);
    done()
  })
  
}

export default fp(fastifyMSSql, { name: 'fastify-ms-sql' })
export { mssql };