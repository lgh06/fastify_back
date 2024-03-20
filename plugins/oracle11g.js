import fp from 'fastify-plugin'
import  oracledb from 'oracledb'
import * as CONFIG from '../CONFIG.js';

const DB_CONFIG = CONFIG.ORACLE_DB_CONFIG;


oracledb.initOracleClient({
  binaryDir: DB_CONFIG.binaryDir
})


async function run() {
  let pool;

  pool = await oracledb.createPool(DB_CONFIG);
  let connection;
  connection = await pool.getConnection();
  return connection;
      // result = await connection.execute(`SELECT * FROM SYS_USER`);

}


function fastifyOracle11g(fastify, options, done) {
  run().then(connection => {

    if (!fastify.oracle11g) {
      fastify.decorate('oracle11g', connection)
    }
    fastify.addHook('onClose', (fastify, done) => connection.close().then(done).catch(done))
    done()
  }).catch(done);
}

export default fp(fastifyOracle11g, { name: 'fastify-oracle-11g' })