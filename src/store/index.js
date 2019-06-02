import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    unit: '',
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
      state.cities = []
      for (var i = 0; i < payload.length; i++) {
        state.cities.push({name: payload[i]})
      }
    },
    GET_UNIT: (state, payload) => {
      state.unit = payload
    }
  }
})
