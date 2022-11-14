<script setup>

import { defineProps, onMounted, onUnmounted, ref } from "vue";

defineProps({
	icons: {
		type: Array,
		required: true
	}
})

onMounted(() => {
  listenerMaxWidth();
  window.addEventListener("resize", listenerMaxWidth);
})

onUnmounted(() => {
  window.removeEventListener("resize", listenerMaxWidth);
})

function listenerMaxWidth() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
}

const isMobile = ref(false);
</script>

<template>
  <div
    v-if="isMobile"
    class="line-icons"
  >
    <div class="line-icons__1">
      <img
        v-for="(icon, index) in icons.slice(0,5)"
        :key="index"
        :src="icon"
        alt
        class="icon"
      >
    </div>
    <div class="line-icons__2">
      <img
        v-for="(icon, index) in icons.slice(5)"
        :key="index"
        :src="icon"
        alt
        class="icon"
      >
    </div>
  </div>
  <div
    v-else
    class="line-icons"
  >
    <img
      v-for="(icon, index) in icons"
      :key="index"
      :src="icon"
      alt
      class="icon"
    >
  </div>
</template>

<style scoped lang="scss">
  .line-icons{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 15px;
    
    padding: 30px;
    @media #{$sm-down} {
      padding: 15px;
    }

    &__1, &__2{
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  } 
  .icon {
    height: 34px;
    width: fit-content;

    filter: $filter-to-primary;
    
    @media #{$sm-up} {
      height: 42px;
    }

    @media #{$xl-low-to-xl-high} {
      height: 34px;
    }
  }


</style>