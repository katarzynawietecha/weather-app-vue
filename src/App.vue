<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.container {
  padding: 10px 0;
  @media(max-width: 576px){
    padding: 10px 5px;
  }
}
</style>
