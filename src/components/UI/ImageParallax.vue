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
  document.addEventListener("mousemove", parallax);
});

onUpdated(() => {
  pathURL.value = props.path;
})

onUnmounted(() => {
  document.removeEventListener("mousemove", parallax);
});

function parallax(e) {
  let _w = window.innerWidth / 2;
  let _h = window.innerHeight / 2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth = `${0 - (_mouseX - _w) * 0.1}px ${0 - (_mouseY - _h) * 0.1}px`;
  let _delta = `${_depth}`;

  delta.value = _delta;
}

const delta = ref("");

const pathURL = ref("");

</script>

<template>
  <img :src="pathURL">
</template>

<style scoped lang="scss">
img {
  object-position: v-bind(delta);

  filter: $filter-to-primary;
}
</style>
