const categorieModule = require("../module/categorieModule.js")
module.exports = {
    getAllCategorie(req, res) {
        categorieModule.getAllCategorie((err, data) => {
            if (err) return res.json({
                "code": 201,
                "des": "服务器异常"
            })
            res.json({
                "code": 200,
                "des": "成功获取",
                data
            })
        })
    },
    delOneCategories(req, res) {
        categorieModule.delOneCategories(req.query.id, err => {
            if (err) return res.json({
                "code": 201,
                "des": "删除失败"
            })
            res.json({
                "code": 200,
                "des": "删除成功",
            })
        })

    },
    addCategories(req, res) {
        categorieModule.addCategories(req.body, err => {
            if (err) return res.json({
                "code": 201,
                "des": "添加失败"
            })
            res.json({
                "code": 200,
                "des": "添加成功",
            })
        })
    },
    editCategories(req, res) {
        categorieModule.editCategories(req.body, err => {
            if (err) return res.json({
                "code": 201,
                "des": "编辑更新失败"
            })
            res.json({
                "code": 200,
                "des": "编辑更新成功",
            })
        })
    },
    delSomeCategories(req, res) {
        categorieModule.delSomeCategories(req.body, err => {
            if (err) return res.json({
                "code": 201,
                "des": "批量删除失败"
            })
            res.json({
                "code": 200,
                "des": "批量删除成功",
            })
        })
    }


}