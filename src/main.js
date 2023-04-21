import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import { Row, Button } from 'element-ui';
import router from './router';
import store from './store';
import './api/mock'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.use(Row)
// Vue.use(Button)

new Vue({
  router,
  store,
  created() {
    store.commit('tab/addMenu', router)
  },
  render: h => h(App),
}).$mount('#app')


