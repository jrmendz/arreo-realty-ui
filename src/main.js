import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/index'
import _ from 'lodash'


Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(require('vue-moment'));
Vue.use(_);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
