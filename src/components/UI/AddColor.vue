<script setup>
import { onMounted, ref } from 'vue';
import { addCSSProperty } from "@/composables/useRootElement.js";
import { getRandomInt } from '@/composables/useRandom.js';
import { getDataUriFromSvg, getSvgFavicon } from "@/composables/useSvg.js";
import Colors from "@/config";

onMounted(() => {
  localStorageBuffer.value = localStorage.getItem('colorful');
})

function activeColor() {
  localStorage.setItem('colorful', true);
  localStorageBuffer.value = localStorage.getItem('colorful');

  const length = Object.entries(Colors).length;
  let newColor = Object.entries(Colors)[getRandomInt(0, length)][1];

	while (newColor.name == "Darker") {
		newColor = Object.entries(Colors)[getRandomInt(0, length)][1];
	}

  addCSSProperty('--primary-color', newColor.primary);
  addCSSProperty('--secondary-color', newColor.secondary);
  addCSSProperty('--filter-to-primary', newColor.filter);

  document.getElementById('squaredFavicon').href = getDataUriFromSvg(getSvgFavicon(newColor.primary)); // Update favicon
  console.log(newColor.name);
}

const localStorageBuffer = ref("");
</script>

<template>
  <div
    v-if="localStorageBuffer === 'false'"
    class="add-color__container fs-15"
  >
    <span>tired of black&white ?<button
      class="add-color__button"
      @click="activeColor()"
    >get color here</button></span>
  </div>
  <div
    v-else
    class="add-color__container fs-15"
  >
    <span>refresh for new colors</span>
  </div>
</template>

<style scoped lang="scss">
.add-color {
	&__container {
		display: block;
		text-align: center;
		margin: 0.1rem;
	}

	&__button {
		background-color: transparent;
		color: $secondary;
		text-decoration: underline;
	}
}

</style>