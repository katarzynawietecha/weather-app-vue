<template>
  <div class="text-right">
    <div class="container">
      <button type="button" class="btn btn-outline-primary">
        <a @click='$router.go(-1)' class="p-2">
          <i class="fas fa-arrow-circle-left"></i> Powrót
        </a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackButton'
}
</script>
