$(function () {
    // function init(){
    //     $.ajax({
    //         type:"get",
    //         url: "/getAllPosts",
    //         success(res){
    //             console.log(res);
    //             let htmlStr = template("postTemplate",res)
    //             $("tbody").html(htmlStr)
    //         }
    //     })
    // }
    // init()

    var pageNum = 1;
    var pageSize = 10;

    function render(obj={}) {
        $.ajax({
            type: "get",
            url: "/getAllPosts",
            data: {
                pageNum: pageNum,
                pageSize: pageSize,
                ...obj
            },
            dataType: "json",
            success(res) {
                // 将数据渲染到页面
                // console.log(res);
                $("tbody").html(template("postTemplate", res.data))
                // 调用分页函数.参数:当前所在页, 总页数(用总条数 除以 每页显示多少条,在向上取整), ajax函数
                setPage(Math.ceil(res.data.total / pageSize))
                // console.log(Math.ceil(res.data.total / pageSize));
            }
        })
    }
    render()


    function setPage(totalPages) {
        $(".pagination").bootstrapPaginator({
            //设置版本号
            bootstrapMajorVersion: 3,
            // 显示第几页
            currentPage: pageNum,
            // 总页数
            totalPages: totalPages,
            //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
            onPageClicked: function (event, originalEvent, type, page) {
                pageNum = page
                render()
            }
        })
    }

    (function () {
        $.ajax({
            type: "get",
            url: "/getAllCategorie",
            dataType: "json",
            success(res) {
                // console.log(res.data);
                var htmlStr = ` <option value="all">所有分类</option> `
                for(var i = 0; i < res.data.length;i++){
                    // console.log(res.data[i]);
                    htmlStr += ` <option value="${res.data[i].id}">${res.data[i].name}</option> `
                    $(".classify").html(htmlStr)
                }
            }
        })
    }())


    $(".btnScreening").on("click",function(){
        var obj = {}
        var categories_id = $(".classify").val()
        var status = $(".status").val()
        // console.log(categories_id);
        // console.log(status);
        if (categories_id != "all"){
            obj.categories_id = categories_id
        }
        if (status != "all") {
            obj.status = status
        }
        // console.log(obj);
        render(obj)
    })

})