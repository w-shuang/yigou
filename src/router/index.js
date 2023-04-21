import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookie from 'js-cookie'

// 1.创建路由组件
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

// 2. 定义路由
const routes = [
    // 主路由
    {
        path: '/',
        name: 'main',
        component: Main,
        redirect: '/home', //重定向
        children: [
            // 子路由
            // { path: '/home', name: 'home', component: Home }, // 首页
            // { path: '/user', name: 'user', component: User }, // 用户管理
            // { path: '/mall', name: 'mall', component: Mall }, // 商品管理
            // { path: '/page1', name: 'page1', component: PageOne }, // 用户管理
            // { path: '/page2', name: 'page2', component: PageTwo }, // 商品管理
        ]
    },
    // 登录
    {
        path: '/login',
        name: 'login',
        component: Login

    }
]
// 3. 创建VueRouter实例
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 4. 挂载在根结点 main.js处理


// 添加全局前置导航守卫
router.beforeEach((to, from, next) => {
    const token = Cookie.get('token')
    if (!token && to.name !== 'login') {
        // token 不存在 说明未登录 跳转登录页面
        next({name: 'login'})
    } else if (token && to.name == 'login') {
        // 用户登录 跳转首页
        next({name: 'home'})
    } else {
        next()
    }
})

export default router
