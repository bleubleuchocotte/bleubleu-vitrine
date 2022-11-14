<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import { defineProps, ref } from 'vue';
import 'vue3-lottie/dist/style.css'

defineProps({
	video: {
		type: Object,
		required: true
	}
})

function createIntersectionObserver() {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  let callback = (entries) => {
		!entries[0].isIntersecting ? isPausing.value = false : isPausing.value = true;
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(container.value.$el);
}

const container = ref();
const isPausing = ref()
</script>

<template>
  <Vue3Lottie
    ref="container"
    :animation-data="video"
    :pause-animation="isPausing"
    @onAnimationLoaded="createIntersectionObserver()"
  />
</template>

<style scoped lang="scss">

  *::v-deep {
    path{
      fill: $primary;
      stroke: $primary;
    }
  }

</style>