<script setup>
import {defineProps} from "vue";

defineProps({
	image: {
		type: Object,
		required: true
	}
})
</script>

<template>
  <div class="slider-images">
    <img
      :src="image.src"
      :alt="image.alt"
      width="640"
      height="340"
    >
  </div>
</template>

<style scoped lang="scss">

	.slider-images {
		position: absolute;
		right: 0;
		top: 0;

		width: 40%;
		height: 100%;

		@media #{$md-down} {
			width: 100%;
			height: 60%;
			bottom: 0;
			top: unset;
		}

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

</style>