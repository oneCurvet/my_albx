const connection = require("./common.js")

module.exports = {
    getAllCategorie(callback) {
        var sqlStr = 'select * from categories';
        connection.query(sqlStr, function (err, results) {
            if (err) return callback(err)
            callback(null, results)
        });
    },
    delOneCategories(id, callback) {
        var sqlStr = 'delete from categories where id = ?';
        connection.query(sqlStr, [id], function (err) {
            if (err) return callback(err)
            callback(null)
        });
    },
    addCategories(obj, callback) {
        var sqlStr = 'INSERT INTO categories (name, slug) VALUES (?,?)';
        connection.query(sqlStr, [obj.name, obj.slug], function (err) {
            if (err) return callback(err)
            callback(null)
        });
    },
    editCategories(obj,callback) {
        var sqlStr = 'update categories set ? where id = ?';
        connection.query(sqlStr, [obj,obj.id], function (err) {
            if (err) return callback(err)
            callback(null)
        });
    },
    delSomeCategories(obj, callback) {
        var sqlStr = `delete from categories where id in (${obj.id})`;
        console.log(sqlStr);
        connection.query(sqlStr, function (err) {
            if (err) return callback(err)
            callback(null)
        });
    }
}