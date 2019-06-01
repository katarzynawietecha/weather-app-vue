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
      cityName: ''
    }
  },
  methods: {
    addCity (cityName) {
      let newCity = {
        name: cityName,
        Celsius: '',
        Fahrenheit: ''
      }
      this.$store.commit('ADD_CITY', newCity)
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
