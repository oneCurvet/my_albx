// 1. 引入模块
const express = require('express')
const router = require("./router")
const bodyParser = require("body-parser")
const session = require("express-session")
// 2. 创建express实例对象
var app = express()
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use("/assets", express.static("assets"))
app.use("/uploads", express.static("uploads"))
app.use("/node_modules", express.static("node_modules"))
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(session({
  secret: '加一个只有你自己知道的加密字符串', // 建议使用 128 个字符的随机字符串
  resave: false, //强制未更改的session
  saveUninitialized: false, //是否存储未初始化的session数据
}))
app.use((req, res, next) => {
  if (req.session.isLogin && req.session.isLogin == "true" || req.url == "/login" || req.url == "/list" || req.url == "/" || req.url == "/detail") {
    next()
  } else {
    res.redirect("/login")
  }
})
// 3. 开启服务并监听端口
app.listen(3000, () => {
  console.log('express server is running at http://127.0.0.1:3000');
})

app.use(router)

// var arr = [1,2,3]
// var arr1 = [4,5,6]
// var arr2 = arr.concat(arr1)
// console.log(arr2);

// var arr = [1,2,3]
// var str = arr.join("")
// console.log(typeof str);
// console.log(str);

// var arr = [1,2,3]
// console.log(arr.pop(arr));

// var arr = [1,2,3]
// console.log(arr.push(4));
// console.log(arr);

// var arr = [1,2,3]
// console.log(arr.reverse());

// var arr = [1, 2, 3]
// console.log(arr.shift());

// var arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.slice(3,5));

// var arr = [1,42154,1245,2346,236,2,5724572472]
// console.log(arr.sort((a,b)=>{
//     return a-b
// }));

// var arr = [12423,5346523,624,6,2436,257,24]
// console.log(arr.splice(2,1,1111));
// console.log(arr);

// var arr = [124,21,412,512]
// console.log(arr.toString());

// var arr = [12412,4512,52135,12,45]
// console.log(arr.unshift(111));
// console.log(arr);

// var str = "141wfsdga"
// console.log(str.blink());

// var str = "141wfsdga"
// console.log(str.charAt(1));

// var str = "123123"
// var str1 = "456456"
// console.log(str.concat(str1));

// var str = "2141234151"
// console.log(str.indexOf(0));

// var str = "1231412515"
// console.log(str.replace("1",""));

// var str = "214pasmjfpa1"
// console.log(str.slice(2,5));

// var str = "12-3412-qntoqn3-o4kn6o"
// console.log(str.split("-"));

// var str = "asfafaf"
// console.log(str.charAt(0).toUpperCase());
// console.log(str.replace(str.charAt(0), str.charAt(0).toLocaleUpperCase()));

// var arr = [1, 1, 1, 2, 2, 1, 3, 1, 3, 4, 5, 6];

// var obj = {}
// var res = []
// function del(arr){
//     for(var i in arr){
//       if(!obj[arr[i]]){
//         obj[arr[i]] = "abc"
//         res.push(arr[i])
//       }
//     }
//     return res
// }
// console.log(del(arr));