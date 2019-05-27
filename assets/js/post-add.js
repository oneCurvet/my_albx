$(function(){
    function render(){
        $.ajax({
            type:"get",
            url: "/getAllCategorie",
            dataType:"json",
            success(res){
                console.log(res);
                var htmlStr
                for(var i = 0 ; i < res.data.length;i++){
                    htmlStr += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
                }
                $("#category").html(htmlStr)
            }
        })
    }
    render()

    $("#feature").on("change",function(){
        var myflie = document.querySelector("#feature").files[0]
        console.log(myflie);
        var formdata = new FormData()
        formdata.append("img",myflie)
        console.log(formdata);
    })
})