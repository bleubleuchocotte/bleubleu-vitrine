<script setup>
import { onMounted, onUnmounted, ref, defineProps, onUpdated } from "vue";
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  pathURL.value = props.path;
  createIntersectionObserver();
});

onUpdated(() => {
  pathURL.value = props.path;
})

onUnmounted(() => {
  document.removeEventListener("mousemove", parallax);
});

function createIntersectionObserver() {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  };

  let callback = (entries) => {
    entries[0].isIntersecting ? document.addEventListener('mousemove', parallax) : document.removeEventListener('mousemove', parallax);
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(containerHTML.value);
}

function parallax(e) {
  let _w = window.innerWidth / 2;
  let _h = window.innerHeight / 2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth = `${0 - (_mouseX - _w) * 0.05}px ${0 - (_mouseY - _h) * 0.05}px`;
  let _delta = `${_depth}`;

  delta.value = _delta;
}

const delta = ref("");
const containerHTML = ref();
const pathURL = ref("");

</script>

<template>
  <img
    ref="containerHTML"
    :src="pathURL"
    alt
    :width="pathURL ? '640' : '0'"
    :height="pathURL ? '340' : '0'"
  >
</template>

<style scoped lang="scss">
img {
  object-position: v-bind(delta);

  transform: scale(1.3);

  filter: $filter-to-primary;

  @media #{$md-down}{
    transform: scale(1.1);
  }
}
</style>
