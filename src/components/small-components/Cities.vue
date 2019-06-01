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
  data () {
    return {}
  },
  methods: {
    deleteCity (index) {
      this.$store.commit('DELETE_CITY', index)
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
