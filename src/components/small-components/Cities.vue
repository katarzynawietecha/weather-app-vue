<template>
  <div>
    <table class="cities">
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
          <span v-if='$store.state.unit === "F"'>{{ city.Fahrenheit }}&deg;F</span>
          <span v-else>{{ city.Celsius }}&deg;C</span>
        </td>
        <td><button type="submit" @click='deleteCity(index)' class="btn btn-outline-danger w-100">
          <i class="fas fa-times-circle"></i> Usuń</button>
        </td>
      </tr>
    </table>
  </div>
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
      let citiesToStore = this.$store.state.cities
      localStorage.setItem('cities', JSON.stringify(citiesToStore))
    }
  },
  mounted () {
    if (localStorage.cities) {
      // Get cities from localStorage (as string), parse as Object and add to store
      let receivedCities = localStorage.getItem('cities')
      this.$store.commit('GET_CITIES', JSON.parse(receivedCities))
    } else {
      this.setNewLocalStorage()
    }
    if (localStorage.unit) {
      this.$store.commit('GET_UNIT', localStorage.unit)
    } else {
      localStorage.unit = this.$store.state.unit
    }
  },
  computed: {
    unit: {
      get () {
        return this.$store.state.unit
      },
      set (selectedUnit) {
        this.$store.commit('CHANGE_UNIT', selectedUnit)
        localStorage.unit = selectedUnit
      }
    }
  }
}
</script>

<style lang="scss">
table {
  width: 100%;
  th, td {
    padding: 5px 20px;
    border-bottom: 1px solid lightgray;
    @media(max-width: 576px){
      &:nth-child(3) {
        padding-left: 0;
        padding-right: 0;
      }
      &:last-child {
        padding-left: 0;
      }
    }
    @media(max-width: 360px){
      &:first-child {
        padding-left: 10px;
        padding-right: 4px;
      }
      &:nth-child(2) {
        padding-left: 2px;
        padding-right: 3px;
      }
    }
  }
}
table.cities {
  th:nth-child(3), td:nth-child(3) {
    padding-left: 0;
    padding-right: 0;
    @media(max-width: 360px){
      text-align: center;
    }
  }
}
</style>
