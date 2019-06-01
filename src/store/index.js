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
    }
  }

})

// {name: 'krakow', Celsius: 4, Fahrenhei: 10},
// {name: 'radom', Celsius: 7, Fahrenhei: 60},
// {name: 'jasło', Celsius: 3, Fahrenhei: 14},
// {name: 'wadowice', Celsius: 4, Fahrenhei: 0}
