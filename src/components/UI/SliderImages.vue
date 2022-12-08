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
			height: 40%;
			bottom: 0;
			top: unset;
		}

		@media #{$md-up} {
			display: flex;
			align-items: center;
		}
		overflow: hidden;

		img {
			width: 100%;

			@media #{$md-down} {
				height: 100%;
				object-fit: cover;
			}
		}
	}

</style>