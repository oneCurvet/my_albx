const express = require("express")
const router = express.Router()
const pagesController = require("./controller/pagesController")
const userController = require("./controller/userController")
const categorieController = require("./controller/categorieController")
const postsController = require("./controller/postsController")

// 前端路由
router.get("/", pagesController.showIndexPage)
    .get("/list", pagesController.showListPage)
    .get("/detail", pagesController.showDetailPage)

    //后台路由
    .get("/categories", pagesController.showCategorirePage)
    .get("/comments", pagesController.showConmmentsPage)
    .get("/admin", pagesController.showAdminIndexPage)
    .get("/login", pagesController.showLoginPage)
    .get("/nav-menus", pagesController.showNavMenusPage)
    .get("/password-reset", pagesController.showPassWordresetPage)
    .get("/post-add", pagesController.showPostAddPage)
    .get("/posts", pagesController.showPostsPage)
    .get("/profile", pagesController.showProfilePage)
    .get("/settings", pagesController.showSettingsPage)
    .get("/slides", pagesController.showSlidesPage)
    .get("/users", pagesController.showUsersPage)
    .post("/login", userController.login)


    //分类目录业务处理
    .get("/getAllCategorie", categorieController.getAllCategorie)
    .get("/delOneCategories", categorieController.delOneCategories)
    .post("/addCategories", categorieController.addCategories)
    .post("/editCategories", categorieController.editCategories)
    .post("/delSomeCategories", categorieController.delSomeCategories)
    
    
    //所有文章
    .get("/getAllPosts", postsController.getAllPosts)
module.exports = router