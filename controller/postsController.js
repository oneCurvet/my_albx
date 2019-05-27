const postsModule = require("../module/postsModule")

module.exports = {
    getAllPosts(req,res){
        console.log(req);
        postsModule.getAllPosts(req.query,(err,data)=>{
            if(err) res.json({
                "code":"201",
                "des":"返回数据有误"
            })
            res.json({
                "code":"200",
                "des":"返回数据成功",
                data
            })
        })
    }
}