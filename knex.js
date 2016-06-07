var logger = require('./logService');
var mysql = require('mysql');

var db ={
        "connectionLimit"     : 10,
        "host"                : "127.0.0.1",
        "user"                : "root",
        "password"            : "romens@2015",
        "logSql"		      : true
};

var mysqlPool  = mysql.createPool(db);

var knex = require('knex')({
    client: 'mysql'
});

var column = ['ADDR.id', 'ADDR.name'];

var sql = knex.withSchema('CustomerDB_qiuyi_127_0_0_1').select(column).from('ClientArea AS ADDR');

logger.sql(sql.toString());

mysqlPool.query(sql.toString(), function (err, result) {
   if(err){
       logger.error(err);
   }else{
       logger.ndump('result', result);
   }
});