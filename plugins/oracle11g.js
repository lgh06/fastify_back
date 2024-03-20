import fp from 'fastify-plugin'
import  OracleDB from 'oracledb'
import * as CONFIG from '../CONFIG.js';

const DB_CONFIG = CONFIG.ORACLE_DB_CONFIG;


OracleDB.initOracleClient({
  binaryDir: DB_CONFIG.binaryDir
})

async function run() {
  let pool =  await OracleDB.createPool(DB_CONFIG);
  let connection = await pool.getConnection();
  if(connection == undefined){
    throw new Error("No Orac 11g connection")
  }
  return connection;
}


function fastifyOracle11g(fastify, options, done) {
  fastify.decorate('oracle11g', run)

  done()
}

export default fp(fastifyOracle11g, { name: 'fastify-oracle-11g' })
export { run as db };