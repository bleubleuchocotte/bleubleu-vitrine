<template>
  <section class="section section--homepage-entry">
    <aside>
      <div class="infos">
        <p>Bleubleu</p>
        <p>Amour et multimedia</p>
      </div>
      <div class="socials">
        <Socials :fields="socials" />
      </div>
      <div class="links" />
    </aside>
    <div class="main-logo" />
  </section>
</template>

<script setup>
import Socials from '../../socials/Socials.vue';
import { defineProps } from 'vue';

defineProps({
  socials: {
    type: Array,
    required: true,
  }
})
</script>

<style scoped>

</style>