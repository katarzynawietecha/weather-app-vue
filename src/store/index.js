import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    unit: 'C',
    cities: []
  },
  mutations: {
    ADD_CITY: (state, payload) => {
      state.cities.push(payload)
    },
    DELETE_CITY: (state, index) => {
      state.cities.splice(index, 1)
    },
    CHANGE_UNIT: (state, payload) => {
      state.unit = payload
    },
    GET_CITIES: (state, payload) => {
      state.cities = payload
    },
    GET_UNIT: (state, payload) => {
      state.unit = payload
    }
  }
})
