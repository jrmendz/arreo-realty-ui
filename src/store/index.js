import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import { make } from 'vuex-pathify'

import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [ pathify.plugin ],
  state: state,
  actions: actions,
  getters: Object.assign(make.getters(state), getters),
  mutations: Object.assign(make.mutations(state), mutations),
})
