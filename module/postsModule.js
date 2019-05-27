const connection = require("./common")

module.exports = {
    getAllPosts(query, callback) {
        let sql = ` SELECT posts.id,posts.title,users.nickname,categories.name,posts.created,posts.status 
                    FROM posts 
                    INNER JOIN users ON posts.user_id = users.id
                    INNER JOIN categories ON posts.category_id = categories.id where 1 = 1 `
                    if (query.categories_id) {
                        sql += ` and posts.category_id = ${query.categories_id} `
                    }
                    if (query.status) {
                        sql += ` and posts.status = "${query.status}" `
                    }

                    sql += ` order by id desc limit ${(query.pageNum - 1) * query.pageSize}, ${query.pageSize} `
        // console.log(sql);
        connection.query(sql, function (err, results) {
            if (err) {
                callback(err)
            } else {
                sql = 'select count(*) total from posts'
                connection.query(sql, function (err, results1) {
                    callback(null, {
                        data: results,
                        total: results1[0].total
                    })
                })
            }
        })
    }
}