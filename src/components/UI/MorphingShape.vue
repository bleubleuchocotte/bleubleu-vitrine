<script setup>
import { onMounted, defineProps, ref } from "vue";
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
    threshold: 0.1,
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
const containerHTML = ref(null);
</script>

<template>
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
              v-if="isRunning"
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
          v-if="isRunning"
          attributeName="d"
          :values="morphingPaths"
          :dur="morphingDuration"
          repeatCount="indefinite"
        />
      </path>
    </svg>

    <slot v-if="isRunning" />
  </div>
</template>

<style scoped>
svg {
  position: absolute;
  top: 0;
  stroke: #bbff65;
}

svg path {
  filter: drop-shadow(1px 1px 10px #bbff65);
}

div {
  min-width: 1060px;
  height: 583px;
  position: absolute;
  background: linear-gradient(
    -106deg,
    rgba(187, 255, 101, 0) 65%,
    rgba(187, 255, 101, 1) 83%
  );
}
</style>
