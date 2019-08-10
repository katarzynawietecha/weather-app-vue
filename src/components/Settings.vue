<template>
  <div>
    <SettingsButton class="settings__button" />
    <div class="container">
      <h2>Ustawienia</h2>
      <hr />
      <div class="row settings__content">
        <span class="col-xs-6 col-sm-3">Jednostka:</span>
        <form class="form-group col-xs-6 col-sm-9">
          <label>
            <input type="radio" name="unit" value="C" v-model='unit' />&deg;C
          </label>
          <label>
            <input type="radio" name="unit" value="F" v-model='unit' />&deg;F
          </label>
        </form>
      </div>
      <hr class="m-0" />
      <BackButton/>
    </div>
  </div>
</template>

<script>
import SettingsButton from './small-components/SettingsButton'
import BackButton from './small-components/BackButton'

export default {
  name: 'Settings',
  mounted () {
    if (localStorage.unit) {
      this.$store.commit('GET_UNIT', localStorage.unit)
    } else {
      localStorage.unit = this.$store.state.unit
    }
  },
  computed: {
    unit: {
      get () {
        return this.$store.state.unit
      },
      set (selectedUnit) {
        this.$store.commit('CHANGE_UNIT', selectedUnit)
        localStorage.unit = selectedUnit
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
.settings__button {
  a:hover {
    text-decoration: none;
    cursor: not-allowed;
  }
}
.settings__content, h2  {
  @media(max-width: 576px){
    padding: 0 10px;
  }
}
label {
  display: block;
}

</style>
