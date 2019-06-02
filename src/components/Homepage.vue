<template>
  <div class="homepage">
    <SettingsButton />
    <div class="container">
      <AddCity />
      <hr />
      <Cities />
    </div>
  </div>
</template>

<script>
import SettingsButton from './small-components/SettingsButton'
import AddCity from './small-components/AddCity'
import Cities from './small-components/Cities'

export default {
  name: 'Homepage',
  data () {
    return {}
  },
  components: {
    SettingsButton,
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
