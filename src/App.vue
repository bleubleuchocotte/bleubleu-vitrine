<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <Header/>
  <p>{{ counter }}</p>
</template>

<style lang="scss">
body {
  min-height: 100vh;
  box-shadow: inset 0px 0px 30px 10px $primary;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
}
</style>
