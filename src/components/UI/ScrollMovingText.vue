<script setup>
import { onMounted, onUnmounted, ref, defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    required: false,
    default: "ltr"
  },
  speed: {
    type: Number,
    required: false,
    default: 1
  },
  left: {
    type: String,
    required: false,
    default: "0"
  },
  top: {
    type: String,
    required: false,
    default: "0"
  },
  zIndex: {
    type: Number,
    required: false,
    default: 1
  }
})

let lastKnownScrollPosition = 0;
let ticking = false;

onMounted(() => {
  document.addEventListener("scroll", onScrollEvent);
});

onUnmounted(() => {
  document.removeEventListener("scroll", onScrollEvent);
});

function onScrollEvent() {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateElementPosition(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
}

function updateElementPosition(scrollPos) {
  switch (props.direction) {
    case "rtl":
      deltaX.value = `${100 - (scrollPos*props.speed / window.scrollMaxY) * 100}%`;
      break;
  
    default:
      deltaX.value = `${(scrollPos*props.speed / window.scrollMaxY) * 100}%`;
      break;
  }
}

const deltaX = ref("0px");
</script>

<template>
  <span>{{ text }}</span>
</template>

<style scoped lang="scss">
span {
  position: absolute;
  z-index: v-bind(zIndex);

  left: v-bind(left);
  top: v-bind(top);

  display: block;
  width: fit-content;

  text-transform: uppercase;
  font-size: 42px;

  border: 1px solid $green;
  padding: 0 25px;

  background-color: $gray;

  transform: translateX(v-bind(deltaX));
}
</style>
