const connection = require("./common.js")
module.exports = {
    getUserData(email,callback){
        var sqlStr = 'select * from users where email = ?';
        connection.query(sqlStr,[email], function (err, results) {
            if(err) return callback(err)
            callback(null,results)
        });
    }
}