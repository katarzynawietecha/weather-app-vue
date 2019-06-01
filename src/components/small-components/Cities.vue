<template>
  <table>
    <tr>
      <th>#</th>
      <th>Miasto</th>
      <th>Średnia prognozowana temperatura</th>
      <th></th>
    </tr>
    <tr v-for='(city, index) in $store.state.cities' :key='index'>
      <td>{{ index + 1 }}</td>
      <td>
        <router-link :to="/details/+`${city.name}`">
          {{ city.name }}
        </router-link>
      </td>
      <td>
        <span v-if='$store.state.unit === "C"'>{{ city.Celsius }}&deg;C</span>
        <span v-else>{{ city.Fahrenheit }}&deg;F</span>
      </td>
      <td><button type="submit" @click='deleteCity(index)' class="btn btn-outline-danger w-100">
        <i class="fas fa-times-circle"></i> Usuń</button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'Cities',
  data () {
    return {}
  },
  methods: {
    deleteCity (index) {
      this.$store.commit('DELETE_CITY', index)
      this.setNewLocalStorage()
    },
    setNewLocalStorage () {
      var citiesString = []
      for (var i = 0; i < this.$store.state.cities.length; i++) {
        if (citiesString.length !== 0) {
          citiesString += ',' + this.$store.state.cities[i].name
        } else {
          citiesString += this.$store.state.cities[i].name
        }
      }
      localStorage.cities = citiesString
    }
  },
  mounted () {
    if (localStorage.cities) {
      let citiesNames = localStorage.cities.split(',')
      this.$store.commit('GET_CITIES', citiesNames)
      console.log('if')
    } else {
      this.setNewLocalStorage()
      console.log('else')
    }
  }
}
</script>

<style lang="scss">
table {
  width: 100%;

  tr {

  }
  th, td {
    padding: 5px 20px;
    border-bottom: 1px solid lightgray;
  }
}
</style>
