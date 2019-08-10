<template>
  <div>
    <form class="form-group pt-1 pt-sm-5">
      <input type="text" placeholder="Nazwa miasta" class="form-control" id="cityname" v-model="cityName" /><button type="submit" class="btn btn-primary" @click="addCity(cityName)">
        <i class="fas fa-search-plus"></i> Dodaj
      </button>
    </form>
    <Error :errorMessage='errorMessage' />
  </div>
</template>

<script>
import Error from './Error'

export default {
  name: 'AddCity',
  data () {
    return {
      cityName: '',
      newCity: {},
      errorMessage: ''
    }
  },
  methods: {
    addCity (cityName) {
      this.checkCity(cityName)
      setTimeout(() => {
        this.resetForm()
      }, 100)
    },
    setNewLocalStorage () {
      let citiesToStore = this.$store.state.cities
      localStorage.setItem('cities', JSON.stringify(citiesToStore))
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
          newCity.Fahrenheit = Math.round((newCity.Celsius * 1.8000 + 32.00) * 10) / 10 // Celsius to Fahrenheit formula source: https://www.metric-conversions.org/temperature/celsius-to-fahrenheit.htm
          newCity.Longitude = response.city.coord.lon
          newCity.Latitude = response.city.coord.lat
          this.$store.commit('ADD_CITY', newCity)
          this.setNewLocalStorage()
        }, error => {
          console.log(error)
        })
    },
    checkCity (cityName) {
      let isCityUnique = true
      this.errorMessage = false
      for (let i = 0; i < this.$store.state.cities.length; i++) {
        if (this.$store.state.cities[i].name.toLowerCase() === cityName.toLowerCase()) {
          this.errorMessage = 'Miasto ' + cityName + ' jest już na liście.'
          isCityUnique = false
          i = this.$store.state.cities.length
        }
      }
      if (isCityUnique === true) {
        this.fetchData(cityName)
      }
    },
    resetForm () {
      document.getElementById('cityname').value = ''
    }
  },
  components: {
    Error
  }
}
</script>

<style lang="scss" scoped>
  input {
    width: 70%;
  }
  button {
    margin-left: 20px;
    width: calc(30% - 20px);
  }
  input, button {
    display: inline-block;
    vertical-align: middle;
    @media(max-width: 576px) {
      display: block;
      width: 90%;
      margin: 10px 5%;
    }
  }
  .alert {
    @media(max-width: 576px) {
      width: 90%;
      margin: 10px 5%;
    }
  }
</style>
