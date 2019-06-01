<template>
  <div>
    <div class="bg-light text-right">
      <div class="container">
        <button type="button" class="btn btn-outline-primary" disabled>
          <router-link :to="{path: 'settings'}" class="p-2">
            <i class="fas fa-cog"></i> Ustawienia
          </router-link>
        </button>
      </div>
    </div>
    <div class="container">
      <h2>Ustawienia</h2>
      <hr />
      <div class="row">
        <span class="col-xs-6 col-sm-3">Jednostka:</span>
        <form class="form-group col-xs-6 col-sm-9">
          <label>
            <input type="radio" name="unit" value="C" v-model='unit' />&deg;C
          </label>
          <label>
            <input type="radio" name="unit" value="F" v-model='unit' />&deg;F
          </label>
        </form>
        <p>
        $store.state.unit:  {{$store.state.unit}}<br />
        unit: {{ unit}}
        </p>
      </div>
      <hr class="m-0" />
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
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {}
  },
  computed: {
    unit: {
      get () {
        return this.$store.state.unit
      },
      set (selectedUnit) {
        this.$store.commit('CHANGE_UNIT', selectedUnit)
      }
    }
  }
}
</script>

<style>
.container {
  padding: 10px 0;
}
label {
  display: block;
}
</style>
