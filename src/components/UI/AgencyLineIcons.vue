<script setup>
import { defineProps, ref } from "vue";

import { useScreenSize } from "@/composables/useMedia.js";

defineProps({
	icons: {
		type: Array,
		required: true
	}
})

const format = ref(useScreenSize());
</script>

<template>
  <div
    v-if="format == 'mobile'"
    class="line-icons"
  >
    <div class="line-icons__1">
      <component
        :is="icon"
        v-for="(icon, index) in icons.slice(0,5)"
        :key="index"
        class="icon"
      />
    </div>
    <div class="line-icons__2">
      <component
        :is="icon"
        v-for="(icon, index) in icons.slice(5)"
        :key="index"
        class="icon"
      />
    </div>
  </div>
  <div
    v-else
    class="line-icons"
  >
    <component
      :is="icon"
      v-for="(icon, index) in icons"
      :key="index"
      class="icon"
    />
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
    
    @media #{$sm-up} {
      height: 42px;
    }

    @media #{$xl-low-to-xl-high} {
      height: 34px;
    }
  }

  .icon :deep(path){
    fill: $primary;
  }

</style>