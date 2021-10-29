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