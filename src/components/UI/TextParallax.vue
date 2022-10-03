<script setup>
import { onMounted, onUnmounted, ref, defineProps } from "vue";
defineProps({
  texts: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  document.addEventListener("mousemove", parallax);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", parallax);
});

function parallax(e) {
  let _w = window.innerWidth / 2;
  let _h = window.innerHeight / 2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth = `${0 - (_mouseX - _w) * 0.02}%, ${0 - (_mouseY - _h) * 0.02}%`;
  let _delta = `${_depth}`;

  delta.value = _delta;
}

const delta = ref("");
</script>

<template>
  <p>
    <span
      v-for="(text, index) in texts"
      :key="index"
    >
      {{ text }}
    </span>
  </p>
</template>

<style scoped>
span {
  font-size: 150px;
  line-height: 95%;

  display: block;
}

p {
  transform: translate(v-bind(delta));
}
</style>
