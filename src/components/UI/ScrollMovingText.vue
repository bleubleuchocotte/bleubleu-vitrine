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
  styles: {
    type: String,
    required: false,
    default: null
  },
  isInView: {
    type: Boolean,
    required: true
  },
  container: {
    type: undefined, 
    required: true
  }
})



onMounted(() => {
  document.addEventListener("scroll", onScrollEvent);
});

onUnmounted(() => {
  document.removeEventListener("scroll", onScrollEvent);
});

function onScrollEvent() {
  lastKnownScrollPosition > window.scrollY ? direction = "up": direction = "down";
  lastKnownScrollPosition = window.scrollY;

  if (!ticking && props.isInView) {
    window.requestAnimationFrame(() => {
      updateElementPosition();
      ticking = false;
    });

    ticking = true;
  }
}

function updateElementPosition() {
  const totalHeight = window.innerHeight + props.container.getBoundingClientRect().height;
  const totalWidth = window.innerWidth;
  const bottom = containerHTML.value.getBoundingClientRect().bottom;
  const top = containerHTML.value.getBoundingClientRect().top;
  const maxPercentage = 75;
  let offset = 0;

  let directionNumber = 1;
  props.direction === "ltr" ? directionNumber = 1 : directionNumber = -1;

  if (direction == "down"){
    offset = (maxPercentage - ((bottom  % totalHeight) / totalHeight) * 100);
  } else {
    offset = (maxPercentage - ((top  % totalHeight) / totalHeight) * 100);
  }
  
  deltaX.value = `${offset / 100 * totalWidth * props.speed * directionNumber}px`;
}

let lastKnownScrollPosition = 0;
let ticking = false;
let direction = "";

const containerHTML = ref(null);

const deltaX = ref("0px");
</script>

<template>
  <span
    ref="containerHTML"
    :style="styles"
    class="fs-42__big"
  >{{ text }}</span>
</template>

<style scoped lang="scss">
span {
  position: absolute;

  display: block;
  width: fit-content;

  text-transform: uppercase;

  border: 1px solid $primary;
  padding: 0 25px;

  background-color: $secondary;

  transform: translateX(v-bind(deltaX));
  transition: transform 1s ease-out;

  @media #{$md-down} {
    white-space: nowrap;

    .android & {
      padding: 5px 25px;
    }
  }
}
</style>
