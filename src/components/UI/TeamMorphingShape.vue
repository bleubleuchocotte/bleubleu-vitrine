<script setup>
import { onMounted, defineProps, ref } from "vue";
import { usePrefersReducedMotion } from "@/composables/useMedia.js"


const props = defineProps({
  morphingPaths: {
    type: Array,
    required: true,
  },
  morphingDuration: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  morphingPaths.value = createMorphingPaths(props.morphingPaths);
  createIntersectionObserver();
});

function createMorphingPaths(array) {
  let bufferArray = [];
  // Copy all elements from paths to morphingPaths
  array.forEach((el) => {
    bufferArray.push(el);
  });

  // Copy all elements from paths to morphingPaths in a reverse way without the last element
  array
    .slice(0, array.length - 1) // Returns a copy of paths. Needed because reverse() erase the value of the initial array -> paths is read only
    .reverse()
    .forEach((el) => {
      bufferArray.push(el);
    });

  const bufferString = bufferArray.join(";"); // Otherwise, svg won't be able to read this array (return astring)

  return bufferString;
}

function createIntersectionObserver() {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  };

  let callback = (entries) => {
    entries[0].isIntersecting
      ? (isRunning.value = true)
      : (isRunning.value = false);
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(containerHTML.value);
}

const morphingPaths = ref([]);
const isRunning = ref(true);
const isReducedMotionEnable = ref(usePrefersReducedMotion());
const containerHTML = ref(null);
</script>

<template>
  <div class="morphing-container">
    <div ref="containerHTML">
      <svg
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clipPath">
            <path :d="props.morphingPaths[0]">
              <animate
                v-if="isRunning && !isReducedMotionEnable"
                attributeName="d"
                :values="morphingPaths"
                :dur="morphingDuration"
                repeatCount="indefinite"
              />
            </path>
          </clipPath>
        </defs>
  
        <path
          :d="props.morphingPaths[0]"
          style="stroke-width: 2"
        >
          <animate
            v-if="isRunning && !isReducedMotionEnable"
            attributeName="d"
            :values="morphingPaths"
            :dur="morphingDuration"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>

    <slot />
  </div>
</template>

<style scoped lang="scss">
svg {
  position: absolute;
  stroke: $primary;
  z-index: 1;
}
div:not(.morphing-container) {
  min-width: 605px;
  height: 100%;
  position: absolute;
}

.morphing-container {
  position: absolute;
  clip-path: url(#clipPath);
  height: 605px;
  width: 605px;

  margin: 60px 0;

  pointer-events: none;

  @media #{$md-down} {
    transform: scale(0.6);
  }
}
</style>
