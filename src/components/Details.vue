<template>
  <div>
    <SettingsButton />
    <div class="container">
      <table>
        <tr>
          <th>
            <h2>{{ city.name }}</h2>
          </th>
          <th></th>
        </tr>
        <tr>
          <td>
            Szerokość geograficzna:
          </td>
          <td>
            {{ city.Latitude }}
          </td>
        </tr>
        <tr>
          <td>
            Długość geograficzna:
          </td>
          <td>
            {{ city.Longitude }}
          </td>
        </tr>
        <tr>
          <td>
            Średnia temperatura:
          </td>
          <td>
            <span v-if='$store.state.unit === "F"'>{{ city.Fahrenheit }}&deg;F</span>
            <span v-else>{{ city.Celsius }}&deg;C</span>
          </td>
        </tr>
      </table>
    </div>
    <BackButton/>
  </div>
</template>

<script>
import SettingsButton from './small-components/SettingsButton'
import BackButton from './small-components/BackButton'

export default {
  name: 'Details',
  data () {
    return {
      city: {
        name: this.$route.params.id,
        Celsius: '',
        Fahrenheit: '',
        Longitude: '',
        Latitude: ''
      }
    }
  },
  mounted () {
    for (let i = 0; i < this.$store.state.cities.length; i++) {
      if (this.$store.state.cities[i].name === this.$route.params.id) {
        this.city.Celsius = this.$store.state.cities[i].Celsius
        this.city.Fahrenheit = this.$store.state.cities[i].Fahrenheit
        this.city.Longitude = this.$store.state.cities[i].Longitude
        this.city.Latitude = this.$store.state.cities[i].Latitude
      }
    }
  },
  components: {
    SettingsButton,
    BackButton
  }
}
</script>

<style lang='scss' scoped>
table {
  tr:nth-child(2), tr:nth-child(3){
    td {
      border: none;
    }
  }
  th, td {
    @media(max-width: 360px){
      padding-left: 10px;
    }
  }
}
</style>
