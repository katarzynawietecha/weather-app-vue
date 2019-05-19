<template>
  <table>
    <tr>
      <th>#</th>
      <th>Miasto</th>
      <th>Średnia prognozowana temperatura</th>
      <th></th>
    </tr>
    <tr v-for='(city, index) in cities' :key='index'>
      <td>{{ index + 1 }}</td>
      <td>
        <router-link :to="/details/+`${city.name}`">
          {{ city.name }}
        </router-link>
      </td>
      <td>{{ city.temperature }}stC</td>
      <td><button type="submit" class="btn btn-outline-danger w-100">Usuń</button></td>
    </tr>
  </table>
</template>

<script>
export default {
  data () {
    return {
      cities: [
        {
          name: 'krakow',
          temperature: 15
        },
        {
          name: 'radom',
          temperature: 15
        }
      ]
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
