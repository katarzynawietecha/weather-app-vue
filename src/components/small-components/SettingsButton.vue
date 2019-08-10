<template>
  <div class="bg-light text-right">
    <div class="container">
      <button type="button" class="btn btn-outline-primary">
        <router-link :to="{path: '/settings'}" class="p-2">
          <i class="fas fa-cog"></i> Ustawienia
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsButton'
}
</script>
