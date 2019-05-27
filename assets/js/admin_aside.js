    $(function () {

        var str = location.href
        var rename
        // if (str.indexOf("?") != -1) {
        //     rename = str.slice(str.lastIndexOf("/") + 1, str.lastIndexOf("?"))
        // } else {
        //     rename = str.slice(str.lastIndexOf("/") + 1)
        // }
        rename = str.indexOf("?") != -1 ? str.slice(str.lastIndexOf("/") + 1, str.lastIndexOf("?")) : str.slice(str.lastIndexOf("/") + 1)
        if (rename == "posts" || rename == "post-add" || rename == "categories") {
            $("#menu-posts").addClass("in")
            $("#menu-posts").attr("aria-expanded", true)
        }
        if (rename == "nav-menus" || rename == "slides" || rename == "settings") {
            $("#menu-settings").addClass("in")
            $("#menu-settings").attr("aria-expanded", true)
        }
        $("#" + rename).addClass("active")
    })