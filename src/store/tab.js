import router from "@/router"
import Cookie from "js-cookie"

export default {
    namespaced: true,
    state: {
        isCollapse: false, //控制菜单展开或收起
        tabsList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            }
        ],//面包屑数据
        menu: []
    },
    mutations: {
        COLLAPSE_MENU(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        SELECT_MENU(state, val) {
            // 判断添加的数据是否为首页
            if (val.name != 'home') {
                let index = state.tabsList.findIndex(item => item.name == val.name)
                if (index == -1) state.tabsList.push(val)
                
            }
        },
        // 删除指定tag
        closeTag(state, val) {
            const index = state.tabsList.findIndex(item => item.name == val.name)
            state.tabsList.splice(index, 1)
        },
        // 设置menu数据
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        // 动态注册路由
        addMenu(state, router) {
            // 判断缓存中是否有数据
            if (!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            // 组装动态路由数据
            const menuArray = []
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            // console.log(menuArray);
            // 路由动态添加
            menuArray.forEach(item => {
                router.addRoute('main', item)
            })

        }
    },
}