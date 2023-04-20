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
        }
    },
}