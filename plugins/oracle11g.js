const fp = require('fastify-plugin')
const oracledb = require('oracledb')

const DB_CONFIG = {
  User: '123', 
  Password: '123',
  connectString: '127.0.0.1:1521/orcl'//Database address: {IP: PORT/Database name}
}

async function run() {
  let pool;

  pool = await oracledb.createPool(DB_CONFIG);
  let connection;
  connection = await pool.getConnection();
  return connection;
      // result = await connection.execute(`SELECT * FROM SYS_USER`);

}


async function fastifyOracle11g(fastify, options, done) {
  const connection = await run(options);

  if (!fastify.oracle11g) {
    fastify.decorate('oracle11g', connection)
  }

  fastify.addHook('onClose', (fastify, done) => connection.close().then(done).catch(done))

  done()
}

export default fp(fastifyOracle11g, { name: 'fastify-oracle-11g' })