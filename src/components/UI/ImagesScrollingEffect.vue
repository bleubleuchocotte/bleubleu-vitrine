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
const buffer = ref(0);
let dimensions, gridSize;

let currentImage, lastImage;



function updateImage(arg){
	const position = {
		x: arg.offsetX,
		y: arg.offsetY
	}
	index.value = getIndex(position);
	if (currentImage) {
		currentImage.style.transform = `translate(${position.x - currentImage.clientWidth/2}px, ${position.y}px)`;
		currentImage.style.zIndex = "2";
	}
}

watch(index, (newIndex, oldIndex) => {
	if (oldIndex != -1){
		lastImage = document.querySelector(`[data-images-container="${props.index}"] [data-index="${oldIndex}"]`);
		lastImage.style.zIndex = "1";
	}

	currentImage = document.querySelector(`[data-images-container="${props.index}"] [data-index="${newIndex}"]`);
	currentImage.style.opacity = "1";
	currentImage.style.height = "100%";
	setTimeout(() => {
		const test = document.querySelector(`[data-images-container="${props.index}"] [data-index="${newIndex}"]`);
		test.style.opacity = "0";
		test.style.height = "50%";
	}, 1000);


})

/**
 * Retourne l'index de l'image en fonction des coordonées x de la souris dans le container
 * 
 * @param {object} position 
 */
function getIndex(position){
	const unit = Math.floor(dimensions.width / (gridSize*0.7));
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
      :src="image"
      :data-index="key"
      alt="test"
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

