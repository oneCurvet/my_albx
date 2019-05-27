module.exports = {
    // 渲染前端页面
    showIndexPage(req, res) {
        res.render("index")
    },
    showListPage(req, res) {
        res.render("list")
    },
    showDetailPage(req, res) {
        res.render("detail")
    },

    //渲染后台页面
    showCategorirePage(req, res) {
        res.render("admin/categories")


    },
    showConmmentsPage(req, res) {
        res.render("admin/comments")


    },
    showAdminIndexPage(req, res) {
        res.render("admin/index")

    },
    showLoginPage(req, res) {
        res.render("admin/login")
    },
    showNavMenusPage(req, res) {
        res.render("admin/nav-menus")


    },
    showPassWordresetPage(req, res) {
        res.render("admin/password-reset")

    },
    showPostAddPage(req, res) {
        res.render("admin/post-add")


    },
    showPostsPage(req, res) {
        res.render("admin/posts")

    },
    showProfilePage(req, res) {
        res.render("admin/profile")

    },
    showSettingsPage(req, res) {
        res.render("admin/settings")

    },
    showSlidesPage(req, res) {
        res.render("admin/slides")

    },
    showUsersPage(req, res) {
        res.render("admin/users")

    },
}