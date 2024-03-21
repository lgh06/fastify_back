import { TYPES } from 'tedious';

import knex from 'knex';
import { MSSQL_DB_CONFIG, MSSQL_DB_CONN_STR } from "../CONFIG.js";

const knexMssql = knex({
  client: 'mssql',
  connection: {
    host: MSSQL_DB_CONFIG.server,
    database: MSSQL_DB_CONFIG.database,
    port: MSSQL_DB_CONFIG.port,
    user: MSSQL_DB_CONFIG.user,
    password: MSSQL_DB_CONFIG.password,
    options: {
      encrypt:false,
      mapBinding: (value) => {
        // bind all strings to varchar instead of nvarchar
        if (typeof value === 'string') {
          return {
            type: TYPES.VarChar,
            value,
          };
        }

        // allow devs to pass tedious type at query time
        if (value != null && value.type) {
          return {
            type: value.type,
            value: value.value,
          };
        }

        // undefined is returned; falling back to default mapping function
      },
    },
    connectString: MSSQL_DB_CONN_STR
  },
});

export { knexMssql, knexMssql as default}