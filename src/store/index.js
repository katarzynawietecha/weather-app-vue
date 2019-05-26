import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
  cities: [
    {name: 'krakow', temperature: 10},
    {name: 'radom', temperature: 15},
    {name: 'jasło', temperature: 14},
    {name: 'wadowice', temperature: 19}
  ]
}

export default new Vuex.Store({
  state
})
