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
  components: {
    SettingsButton,
    AddCity,
    Cities
  }
}
</script>

<style lang='scss'>
  .container {
    a:hover {
     text-decoration: none;
   }
  }
  .fab {
    font-family: inherit;
  }
</style>
