<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import { defineProps, ref } from 'vue';
import { useScreenSize, usePrefersReducedMotion } from "@/composables/useMedia.js"
import 'vue3-lottie/dist/style.css'

defineProps({
  videoDesktop: {
    type: Object,
    required: true
  },
	videoMobile: {
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
		entries[0].isIntersecting ? isPausing.value = false : isPausing.value = true;
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(container.value.$el);
}

function lottieLoaded() {
  createIntersectionObserver();
  if (isPausing.value || isReducedMotionEnable.value) {
    container.value.pause();
  }
}

const container = ref();
const isPausing = ref(true)
const format = ref(useScreenSize());
const isReducedMotionEnable = ref(usePrefersReducedMotion());
</script>

<template>
  <Vue3Lottie
    ref="container"
    :animation-data="format == 'mobile' ? videoMobile : videoDesktop"
    :pause-animation="isPausing || isReducedMotionEnable"
    @onAnimationLoaded="lottieLoaded()"
  />
</template>

<style scoped lang="scss">

  :deep(*) {

    g[aria-label] path{
      fill: $primary;
    }

    path[fill] {
      fill: $primary;
    }

    path[stroke] {
      stroke: $primary;
    }
  }

</style>