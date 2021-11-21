<template>
  <span class="title">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.title {
  font-size: 32px;
  font-weight: 100;
}

@media #{$xs-up} {
  .title {
    @include fluid(font-size, 576px, 1440px, 38px, 55px);
  }
}

</style>