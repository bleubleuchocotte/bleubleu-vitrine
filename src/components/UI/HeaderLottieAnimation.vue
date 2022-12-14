<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import { defineProps, ref, onMounted } from 'vue';
import { useScreenSize } from "@/composables/useMedia.js"
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

onMounted(() => {
	createIntersectionObserver();
})

const container = ref();
const isPausing = ref(true)
const format = ref(useScreenSize());
</script>

<template>
  <Vue3Lottie
    ref="container"
    :animation-data="format == 'mobile' ? videoMobile : videoDesktop"
    :pause-animation="isPausing"
    @onAnimationLoaded="createIntersectionObserver()"
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