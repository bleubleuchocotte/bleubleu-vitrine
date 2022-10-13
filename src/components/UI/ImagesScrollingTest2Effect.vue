<script setup>
import {defineProps, onMounted, ref, watch} from "vue";

const props = defineProps({
	images: {
		type: Array,
		required: true
	},
	index: {
		type: Number,
		required: true
	}
})

onMounted(() => {
	gridSize = props.images.length;
	dimensions = {
		width: container.value.clientWidth
	}
})

const container = ref();
const index = ref(-1);
let dimensions, gridSize;

let currentImage, lastImage;

let bufferIndex = 0;



function updateImage(arg){
	const position = {
		x: arg.offsetX,
		y: arg.offsetY
	}
	index.value = getIndex(position);
	if (currentImage) {
		currentImage.style.transform = `translate(${position.x - currentImage.clientWidth/2}px, ${position.y}px)`;

	}
}

watch(index, () => {

	const currentIndex = bufferIndex;

	currentImage = document.querySelector(`[data-images-container="${props.index}"] [data-index="${currentIndex % 4}"]`);
	currentImage.style.opacity = "1";
	currentImage.style.height = "100%";
	currentImage.style.zIndex = "2";

	setTimeout((arg = currentIndex) => {
		const test = document.querySelector(`[data-images-container="${props.index}"] [data-index="${arg % 4}"]`);
		test.style.opacity = "0";
		test.style.height = "50%";
	}, 1000);

	bufferIndex += 1;


})

/**
 * Retourne l'index de l'image en fonction des coordonées x de la souris dans le container
 * 
 * @param {object} position 
 */
function getIndex(position){
	const unit = Math.floor(dimensions.width / (2));
	return (Math.floor(position.x / unit) % gridSize);
}
</script>


<template>
  <div
    ref="container"
    :data-images-container="props.index"
    @mousemove="updateImage"
  >
    <img
      v-for="(image, key) in images"
      :key="key"
      :ref="`image-${key}`"
      :src="image.media.url"
      :data-index="key"
      :alt="image.media.alt"
    >
  </div>
</template>

<style scoped lang="scss">
	img {
		pointer-events: none;
		height: 100%;

		position: absolute;
		opacity: 0;
		bottom: 50%;
		z-index: 1;
		transition: opacity 0.4s $ease-vnr, height 0.4s $ease-vnr;
	}

	div[data-images-container]{
		position: relative;
	}

</style>

