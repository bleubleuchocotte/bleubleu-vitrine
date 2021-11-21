<template>
  <header class="header o-grid-item--full-bottom">
    <h1 class="header__title">
      <span class="block">
        <span>multidisciplinary</span>

        <span class="icon">
          <IconKeurKeur />
        </span>

        <span class="border">collective</span>
      </span>
      <span class="block">
        <span>with a strong</span>

        <span class="icon">
          <IconKeurKeur />
        </span>

        <span>personnality</span>

        <span class="icon">
          <IconKeurKeur />
        </span>
      </span>
    </h1>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import IconKeurKeur from '@/assets/icons/icon-keurkeur.svg?inline';

const keywords = ref(['multidisciplinary','[icon-keukeur]' ,'collective', 'with a strong', 'personnality']);

function getComponent(string) {
  const betweenBrackets = new RegExp(/(?<=\[)(.*?)(?=\])/g);
  return string.match(betweenBrackets);
}
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

.header .icon {
  display: inline-block;
  width: 50px;
  margin: 0 16px;

  svg {
    vertical-align: middle;
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
