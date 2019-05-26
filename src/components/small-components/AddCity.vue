<template>
  <form class="form-group pt-5">
    <input type="text" placeholder="Nazwa miasta" class="form-control" id="cityname"/><button type="submit" class="btn btn-primary">
      <i class="fas fa-search-plus"></i> Dodaj
    </button>
  </form>
</template>

<script>
export default {
  name: 'AddCity',
  data () {
    return {}
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
