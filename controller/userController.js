const loginModule = require("../module/loginModule")
module.exports = {
    login(req, res) {
        loginModule.getUserData(req.body.email, (err, data) => {
            if (err) {
                res.json({
                    "code": 201,
                    "des": "服务器返回错误"
                })
            } else {
                if (data.length == 0) {
                    res.json({
                        "code": 201,
                        "des": "邮箱输入不存在"
                    })
                } else {
                    if (req.body.password != data[0].password) {
                        res.json({
                            "code": 201,
                            "des": "密码输入错误"
                        })
                    }else{
                        req.session.isLogin = "true"
                        req.session.data = data[0]
                        res.json({
                            "code": 200,
                            "des": "登录成功"
                        })
                        
                    }
                }
            }

        })
    }
}