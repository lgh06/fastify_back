const fp = require('fastify-plugin')
const oracledb = require('oracledb')
const CONFIG = require('../CONFIG');

oracledb.initOracleClient({
  binaryDir: 'E:\exe\instantclient_12_2'
})

const DB_CONFIG = CONFIG.ORACLE_DB_CONFIG;

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

module.exports = fp(fastifyOracle11g, { name: 'fastify-oracle-11g' })