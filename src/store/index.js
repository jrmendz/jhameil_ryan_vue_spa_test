import Vue from 'vue'
import Vuex from 'Vuex'
import { userActions } from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: Object.assign({}, userActions)
})
