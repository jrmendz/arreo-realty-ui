import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/index'
import _ from 'lodash'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faThLarge, faBed, faAlignJustify, faBath, faCar, faRulerCombined, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faThLarge, faBed, faAlignJustify, faBath, faCar, faRulerCombined, faMapMarkerAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(require('vue-moment'));
Vue.use(_);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
