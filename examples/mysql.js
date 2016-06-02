var mysql           = require('mysql');
var logger          = require('./logService');
var db = {
        "connectionLimit"     : 10,
        "host"                : "127.0.0.1",
        "user"                : "root",
        "password"            : "romens@2015",
        "logSql"		      : true
};

var pool  = mysql.createPool(db);

global.__mysql = pool;
    
var SQL_CT_CLIENT_GSP_TYPES = " select " +
    "id, name, updatedOn " +
    "FROM CustomerDB_qiuyi_wx_romenscd_cn.ClientGspTypes " +
    "Order By id ASC";



__mysql.query(SQL_CT_CLIENT_GSP_TYPES, function (error, results) {
    if (error) {
        logger.error(error);
    }else{
        var data = {};
        logger.ndump('reqults', results);
        data.allGspTypes = results;

        data.institutions = [
            {
                name: "二级",
                hospitalLevel: "secondLevel",
                hospitalGrades: [
                    "甲等", "乙等", "丙等", "未评", "其他", "未知"
                ]
            },
            {
                name: "三级",
                hospitalLevel: "threeLevel",
                hospitalGrades: [
                    "甲等", "乙等", "合格", "未定等", "其他", "未知"
                ]
            }
        ];

        logger.ndump('data', data);
    }
});

var SQL_CT_CLIENTAREAS_INSERT = "INSERT INTO CustomerDB_qiuyi_wx_romenscd_cn.ClientArea (name) " +
    "VALUES ('上海');";

__mysql.query(SQL_CT_CLIENTAREAS_INSERT, function (error, result) {
    if (error) {
        logger.sqlerr(error);
    }else{
        logger.ndump('result', result);
    }

});