import Vue from 'vue'
import { asyncRouterMap, constantRouterMap } from '@/router/router.config'
const permission = {
  state: {
    addRouters: [],
    routerbtn: true
  },
  mutations: {
    SET_ROUTERBTN: (state, data) => {
      state.routerbtn = data
    },
    SET_ADDROUTERS: (state, data) => {
      state.addRouters = data
    }
  },
  actions: {
    addRouters ({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('SET_ADDROUTERS', asyncRouterMap)
        commit('SET_ROUTERBTN', false)
        resolve()
      })
    }
  }
}
export default permission
