<template>
  <header class="header o-grid-item--full">
    <h1 class="header__title">
      <span
        v-for="(word, i) in keywords"
        :key="i"
      >{{ word }}</span>
    </h1>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const keywords = ref(['multidisciplinary' ,'collective', 'with a strong', 'personnality']);
</script>

<style lang="scss">
.header__title {
  font-family: $font-secondary;
  font-weight: 50;
  font-size: 50px;
  font-variation-settings: 'wdth' 400;
  text-transform: uppercase;
}
</style>
