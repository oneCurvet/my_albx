$(function () {
    function sendAjax() {
        $.ajax({
            type: "get",
            url: "/getAllCategorie",
            success(res) {
                var htmlStr = template("template", res)
                $("tbody").html(htmlStr)
            }
        })
    }
    sendAjax()


    $("tbody").on("click", ".delCategories", function () {
        $.ajax({
            type: "get",
            url: "/delOneCategories",
            dataType: "json",
            data: {
                id: $(this).data("id")
            },
            success(res) {
                if (res.code == 200) {
                    $(".alert-danger > span ").text("删除成功")
                    $(".alert-danger").fadeIn(500).delay(2000).fadeOut(500)
                }
                sendAjax()
            }
        })
    })

    $("tbody").on("click", ".editCategories", function () {
        $("#name").val($(this).data().name)
        $("#slug").val($(this).data().slug)
        $("#id").val($(this).data().id)
        $(".addCategories").val("编辑")
    })


    $(".addCategories").on("click", function () {
        if ($(".addCategories").val() == "添加") {
            $.ajax({
                type: "post",
                url: "/addCategories",
                dataType: "json",
                data: $("form").serialize(),
                success(res) {
                    if (res.code == 200) {
                        $(".alert-danger > span ").text("添加成功")
                        $(".alert-danger").fadeIn(500).delay(2000).fadeOut(500)
                    }
                    sendAjax()
                }
            })
            $("#name").val("")
            $("#slug").val("")
        } else {
            $.ajax({
                type: "post",
                url: "/editCategories",
                dataType: "json",
                data: $("form").serialize(),
                success(res) {
                    if (res.code == 200) {
                        $(".alert-danger > span ").text("编辑更新成功")
                        $(".alert-danger").fadeIn(500).delay(2000).fadeOut(500)
                    }
                    sendAjax()
                }
            })
            $("#name").val("")
            $("#slug").val("")
        }

    })
    // 全选和全不选， 同时全选之后判断tbody中被选择的数据行的数量是否大于1， 如果大于则显示批量删除按钮
    $(".checkAll").on("click", function () {
        let value = $(this).prop("checked")
        $(".checkOne").prop("checked", value)
        let num = $("tbody .checkOne:checked")
        // if(num.length > 1){
        //     $(".btn-del").fadeIn(500)
        // }else{
        //     $(".btn-del").fadeOut(500)
        // }
        num.length > 1 ? $(".btn-del").fadeIn(500) : $(".btn-del").fadeOut(500)
    })
    // body中的复选框的单击操作
    // 单击之后判断当前被选中的复选框的数量是否大于1， 如果大于则显示批量删除按钮 -
    // 同时判断tbody中的复选框是否都被选中， 如果是则让全选复选框也被选中， 否则取消选中
    $("tbody").on("click", ".checkOne", function () {
        let num = $("tbody .checkOne:checked")
        num.length > 1 ? $(".btn-del").fadeIn(500) : $(".btn-del").fadeOut(500)
        // if(num.length == $("tbody .checkOne").length){
        //     $(".checkAll").prop("checked",true)
        // }else{
        //     $(".checkAll").prop("checked", false)
        // }
        num.length == $("tbody .checkOne").length ? $(".checkAll").prop("checked", true) : $(".checkAll").prop("checked", false)
    })


    $(".btn-del").on("click", function () {
        let allCheck = $("tbody .checkOne:checked")
        console.log(allCheck);
        let arr = []
        for (var i = 0; i < allCheck.length; i++) {
            arr.push($(allCheck[i]).data("id"))
        }
        $.ajax({
            type: "post",
            url: "/delSomeCategories",
            data: {
                id: arr.join()
            },
            success(res) {
                sendAjax()
            }
        })
    })
})