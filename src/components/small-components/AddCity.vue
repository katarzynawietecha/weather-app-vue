<template>
  <form class="form-group pt-5">
    <input type="text" placeholder="Nazwa miasta" class="form-control" id="cityname" v-model="cityName" /><button type="submit" class="btn btn-primary" @click="addCity(cityName)">
      <i class="fas fa-search-plus"></i> Dodaj
    </button>
  </form>
</template>

<script>
export default {
  name: 'AddCity',
  data () {
    return {
      cityName: '',
      newCity: {}
    }
  },
  methods: {
    addCity (cityName) {
      this.fetchData(cityName)
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
      // var citiesString = []
      // for (var i = 0; i < this.$store.state.cities.length; i++) {
      //   if (citiesString.length !== 0) {
      //     citiesString += ',' + this.$store.state.cities[i].name + '/' + this.$store.state.cities[i].Celsius + '/' + this.$store.state.cities[i].Fahrenheit + '/' + this.$store.state.cities[i].Latitude + '/' + this.$store.state.cities[i].Longitude
      //   } else {
      //     citiesString += this.$store.state.cities[i].name + '/' + this.$store.state.cities[i].Celsius + '/' + this.$store.state.cities[i].Fahrenheit + '/' + this.$store.state.cities[i].Latitude + '/' + this.$store.state.cities[i].Longitude
      //   }
      // }
      // localStorage.cities = citiesString
    },
    fetchData (city) {
      let key = '5739b122d15a0b5a6dcee4e0854a42b0'
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},pl&units=metric&appid=${key}`) // Celsius
      // fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},uk&units=imperal&appid=${key}`) // Fahrenheit
        .then(response => response.json())
        .then(response => {
          let newCity = {}
          newCity.name = this.cityName
          newCity.Celsius = Math.round(response.list[0].main.temp * 10) / 10
          newCity.Fahrenheit = Math.round((this.newCity.Celsius * 1.8000 + 32.00) * 10) / 10 // Celsius to Fahrenheit formula source: https://www.metric-conversions.org/temperature/celsius-to-fahrenheit.htm
          newCity.Longitude = response.city.coord.lon
          newCity.Latitude = response.city.coord.lat
          this.$store.commit('ADD_CITY', newCity)
          this.setNewLocalStorage()
        }, error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  input, button {
    display: inline-block;
    vertical-align: middle;
  }
  input {
    width: 70%;
  }
  button {
    margin-left: 20px;
    width: calc(30% - 20px);
  }
</style>
