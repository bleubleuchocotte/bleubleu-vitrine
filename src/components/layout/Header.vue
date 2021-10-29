<template>
  <header class="header o-grid-item--full-bottom">
    <h1 class="header__title">
      <div class="block">
        <span>multidisciplinary</span>
        <span class="border">collective</span>
      </div>
      <div class="block">
        <span>with a strong</span>
        <span>personnality</span>
      </div>
    </h1>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const keywords = ref(['multidisciplinary' ,'collective', 'with a strong', 'personnality']);
</script>

<style lang="scss" scoped>
.header__title {
  font-family: $font-secondary;
  font-weight: 50;
  font-size: 40px;
  font-variation-settings: 'wdth' 200;
  text-transform: uppercase;
  text-align: center;
  padding: 12px 40px;
  @include fluid(font-size, 992px, 1920px, 25px, 50px);

  span {
    word-break: break-all;
  }
}

.block {
  display: block;
}

.border {
  display: inline-block;
  padding: 0 8px;
  border: 1px solid $black;
  border-radius: 12px;
}
</style>
