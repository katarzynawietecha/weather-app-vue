<template>
  <div v-if='errorMessage' class="alert alert-danger">
    <span>{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: ['errorMessage']
}
</script>
