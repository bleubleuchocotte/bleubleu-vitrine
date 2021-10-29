<template>
  <GradiantFrame />
  <router-view />
</template>

<script>
import GradiantFrame from './components/layout/GradiantFrame.vue';
export default {
  components: { GradiantFrame }
}
</script>

<style lang="scss">
#app {
  position: relative;
  min-height: 100vh;
}
</style>