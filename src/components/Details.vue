<template>
  <div>
    <div class="bg-light text-right">
      <div class="container">
        <button type="button" class="btn btn-outline-primary">
          <router-link :to="{path: 'settings'}" class="p-2">
            <i class="fas fa-cog"></i> Ustawienia
          </router-link>
        </button>
      </div>
    </div>
    <div class="container">
      <p>
        {{ $route.params.id }} details page
        <br />
        {{ city }}
      </p>
    </div>
    <div class="text-right">
      <div class="container">
        <button type="button" class="btn btn-outline-primary">
          <router-link :to="'/'" class="p-2">
            <i class="fas fa-arrow-circle-left"></i> Powrót
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      city: ''
    }
  }
  // created () {
  //   // fetch the data when the view is created and the data is
  //   // already being observed
  //   this.fetchData()
  // },
  // watch: {
  //   // call again the method if the route changes
  //   '$route': 'fetchData'
  // },
  // methods: {
  //   fetchData () {
  //     // this.error = this.post = null
  //     // this.loading = true
  //     // replace `getPost` with your data fetching util / API wrapper
  //     get(this.$route.params.id, (err, data) => {
  //       // this.loading = false
  //       if (err) {
  //         this.error = err.toString()
  //       } else {
  //         console.log(data)
  //         this.city = data
  //       }
  //     })
  //   }
  // }
}
</script>

<style>
.container {
  padding: 10px 0;
}
</style>
