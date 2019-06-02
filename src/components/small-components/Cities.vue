<template>
  <div>
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
    <p>Celsius: {{Celsius}}<br />Fahrenheit: {{Fahrenheit}}<br />Latitude: {{Latitude}}<br />Longitude: {{Latitude}}</p>
  </div>
</template>

<script>
export default {
  name: 'Cities',
  data () {
    return {
      Celsius: '',
      Fahrenheit: '',
      Latitude: '',
      Longitude: ''
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      let city = 'London'
      let key = '5739b122d15a0b5a6dcee4e0854a42b0'
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},uk&units=metric&appid=${key}`) //Celsius     // fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},uk&units=imperal&appid=${key}`) //Fahrenheit
      .then(response => response.json())
      .then(response => {
        this.Celsius = Math.round(response.list[0].main.temp * 10) / 10
        this.Fahrenheit = Math.round((this.Celsius * 1.8000 + 32.00)* 10) / 10  //Celsius to Fahrenheit formula source: https://www.metric-conversions.org/temperature/celsius-to-fahrenheit.htm
        this.Longitude = response.city.coord.lon
        this.Latitude = response.city.coord.lat
      }, error => {
        console.log(error)
      })
    },
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
    } else {
      this.setNewLocalStorage()
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
