import { createStore } from 'vuex'
import { INCREMENT, DECREMENT } from './mutation-types'

const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    [INCREMENT](state) {
      state.count++
    },
    [DECREMENT](state) {
      state.count--
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrement({ commit }) {
      commit('decrement')
    }
  }
})

export default store
