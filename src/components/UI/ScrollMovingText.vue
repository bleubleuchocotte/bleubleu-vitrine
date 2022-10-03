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
  leftStart: {
    type: String,
    required: false,
    default: "0"
  },
  topStart: {
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



onMounted(() => {
  document.addEventListener("scroll", onScrollEvent);
  createIntersectionObserver();
});

onUnmounted(() => {
  document.removeEventListener("scroll", onScrollEvent);
});

function createIntersectionObserver() {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  let callback = (entries) => {
    entries[0].isIntersecting
      ? (isRunning.value = true)
      : (isRunning.value = false);
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(containerHTML.value);
}

function onScrollEvent() {
  lastKnownScrollPosition > window.scrollY ? direction = "up": direction = "down";
  lastKnownScrollPosition = window.scrollY;

  if (!ticking && isRunning.value) {
    window.requestAnimationFrame(() => {
      updateElementPosition();
      ticking = false;
    });

    ticking = true;
  }
}

function updateElementPosition() {
  const totalHeight = window.innerHeight + containerHTML.value.getBoundingClientRect().height;
  const bottom = containerHTML.value.getBoundingClientRect().bottom;
  const top = containerHTML.value.getBoundingClientRect().top;
  let offset = 0;
  if (direction == "down"){
    offset = (100 - ((bottom  % totalHeight) / totalHeight) * 100);
  } else {
    offset = (100 - ((top  % totalHeight) / totalHeight) * 100);
  }

  deltaX.value = `${offset / 100 * window.innerWidth * props.speed}px`;
}

let lastKnownScrollPosition = 0;
let ticking = false;
let direction = "";

const containerHTML = ref(null);
const isRunning = ref(false);

const deltaX = ref("0px");
</script>

<template>
  <span ref="containerHTML">{{ text }}</span>
</template>

<style scoped lang="scss">
span {
  position: absolute;
  z-index: v-bind(zIndex);

  left: v-bind(leftStart);
  top: v-bind(topStart);

  display: block;
  width: fit-content;

  text-transform: uppercase;
  font-size: 42px;

  border: 1px solid $green;
  padding: 0 25px;

  background-color: $gray;

  transform: translateX(v-bind(deltaX));
  transition: transform 1s ease-out;
}
</style>
