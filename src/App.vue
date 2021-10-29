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
  font-family: $font-primary;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
}
</style>