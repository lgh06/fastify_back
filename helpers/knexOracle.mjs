import knex from 'knex';

import {ORACLE_DB_CONFIG} from "../CONFIG.js";

const knexOracle = knex({
  client: 'oracledb',
  connection: {
    _enableStats: true,
    user: ORACLE_DB_CONFIG.user,
    password: ORACLE_DB_CONFIG.password,
    connectString: ORACLE_DB_CONFIG.connectString
  },
  fetchAsString: [ 'number', 'clob' ]
});

export { knexOracle, knexOracle as default}