<template>
  <div class="homepage">
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
      <AddCity />
      <hr />
      <Cities />
    </div>
  </div>
</template>

<script>
import AddCity from '@/components/small-components/AddCity'
import Cities from '@/components/small-components/Cities'

export default {
  name: 'Homepage',
  data () {
    return {

    }
  },
  components: {
    AddCity,
    Cities
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  .container {
    padding: 10px 0;
    a:hover {
     text-decoration: none;
   }
  }
  .fab {
    font-family: inherit;
  }
</style>
