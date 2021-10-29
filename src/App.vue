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

<style>
#app {
  position: relative;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
}
</style>