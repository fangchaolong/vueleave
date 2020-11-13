import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)

export default new Vuex.Store({

  // state: {},

  // 这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里
  modules: {
    user,
    permission
  },
  getters
  // 在这里的getters的作用是往state里写入参数
  /*
    state: {
      name: user.name
    }
  */
})
