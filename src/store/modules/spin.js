const spin = {
  state: {
    spinning: false,
    loadingTip: ''
  },

  mutations: {
    SET_SPIN: (state, spinning) => {
      state.spinning = spinning
    },
    SET_TIP: (state, tip) => {
      state.loadingTip = tip
    }
  },

  actions: {
    // true:显示 false:隐藏
    loading({ commit }, data) {
      commit('SET_SPIN', data)
      commit('SET_TIP', '')
    },
    // true:显示 false:隐藏
    loadingMsg({ commit }, data) {
      commit('SET_SPIN', data.loading)
      commit('SET_TIP', data.msg)
    }
  }
}

export default spin
