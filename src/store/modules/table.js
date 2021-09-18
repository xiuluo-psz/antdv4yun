const table = {
  state: {
    resizeColMap: new Map()
  },

  mutations: {
    SET_RESIZECOLMAP: (state, resizeMap) => {
      state.resizeColMap.set(resizeMap.id, resizeMap.cols)
    }
  },

  actions: {
    setResizeColumns ({ commit }, data) {
      commit('SET_RESIZECOLMAP', data)
    }
  }
}

export default table
