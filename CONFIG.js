const ORACLE_DB_CONFIG = {
  binaryDir: 'E:\exe\instantclient_12_2',
  user: 'z', 
  password: 'x',
  connectString: 'y'//Database address: {IP: PORT/Database name}
}

const MSSQL_DB_CONN_STR = "Server=x,1433;Database=y;User Id=z;Password=z;Encrypt=false";


const MSSQL_DB_CONFIG = {
  user: 'x', 
  password: 'y',
  server: 'z', 
  database: 'z',
  port: 1433,
  connectString: MSSQL_DB_CONN_STR
}


export { ORACLE_DB_CONFIG, MSSQL_DB_CONN_STR, MSSQL_DB_CONFIG }
