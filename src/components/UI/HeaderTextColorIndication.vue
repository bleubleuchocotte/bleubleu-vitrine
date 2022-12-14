<script setup>
import { defineEmits, ref, onMounted } from "vue";
import { addCSSProperty } from "@/composables/useRootElement.js";
import { getRandomInt } from '@/composables/useRandom.js';
import { getDataUriFromSvg, getSvgFavicon } from "@/composables/useSvg.js";
import Colors from "@/config";

const emit = defineEmits(["colorful"]);

onMounted(() => {
	color.value = JSON.parse(localStorage.getItem('color'));
})

function activeColor() {
	emit("colorful", true)
  localStorage.setItem('colorful', true);

  const length = Object.entries(Colors).length;
  color.value = Object.entries(Colors)[getRandomInt(0, length)][1];

	while (JSON.stringify(color.value) == localStorage.getItem('color')) {
		// Draw colors until a new one is founded
		color.value = Object.entries(Colors)[getRandomInt(0, length)][1];
	}

  addCSSProperty('--primary-color', color.value.primary);
  addCSSProperty('--secondary-color', color.value.secondary);
  addCSSProperty('--filter-to-primary', color.value.filter);

  document.getElementById('squaredFavicon').href = getDataUriFromSvg(getSvgFavicon(color.value.primary)); // Update favicon
	localStorage.setItem('color', JSON.stringify(color.value));
  console.log(color.value.name);
}

const color = ref({});
</script>

<template>
  <div class="add-color__container fs-15">
    <span>tired of {{ color.tiredOf }} ?<button
      class="add-color__button"
      @click="activeColor()"
    >get color here</button></span>
  </div>
</template>

<style scoped lang="scss">
.add-color {
	&__container {
		text-align: center;
		margin: 0.1rem;

		&.animate{
			transform: translateY(-24px);
			margin: 0;
			transition: transform 0.4s $ease-vnr 0.2s, margin 0.4s $ease-vnr 0.2s;
		}
	}

	&__button {
		background-color: transparent;
		color: $secondary;
		text-decoration: underline;
	}


}

</style>