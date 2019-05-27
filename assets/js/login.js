$(function () {




    $(".btn-primary").on("click", function () {
        var email = $("#email").val()
        var password = $("#password").val()
        var emailReg = /\w+[@]\w+[.]\w+/
        if (!emailReg.test(email)) {
            $(".alert-danger > span").text("邮箱输入不合法")
            $(".alert-danger").fadeIn(500).delay(2000).fadeOut(500)
            return;
        }


        $.ajax({
            type: "post",
            url: "/login",
            data: $(".login-wrap").serialize(),
            success(res) {
                if(res.code == 201){
                    $(".alert-danger > span").text(res.des)
                    $(".alert-danger").fadeIn(500).delay(2000).fadeOut(500)
                }else{
                    location.href = "/admin"
                }
            }
        })
    })
})