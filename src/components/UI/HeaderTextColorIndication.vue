<script setup>
import { defineEmits } from "vue";
import { addCSSProperty } from "@/composables/useRootElement.js";
import { getRandomInt } from '@/composables/useRandom.js';
import { getDataUriFromSvg, getSvgFavicon } from "@/composables/useSvg.js";
import Colors from "@/config";

const emit = defineEmits(["colorful"]);

function activeColor() {
	emit("colorful", true)
  localStorage.setItem('colorful', true);

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
</script>

<template>
  <div class="add-color__container fs-15">
    <span>tired of black&white ?<button
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