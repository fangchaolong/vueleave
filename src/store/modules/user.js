const user = {
  state: {
    name: ''
  },

  mutations: {
    SET_NAME: (state, name) => {
      console.log(name)
      state.name = name
      console.log(state.name)
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      commit('SET_NAME', userInfo.name)
    }
  }
}

export default user
