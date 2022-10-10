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
	console.log(container);
})

const container = ref();
const index = ref(-1);
let dimensions, gridSize;

let currentImage;



function updateImage(arg){
	const position = {
		x: arg.offsetX,
		y: arg.offsetY
	}
	index.value = getIndex(position);
	currentImage.style.transform = `translate(${position.x - currentImage.clientWidth/2}px, ${position.y- currentImage.clientHeight/2}px)`;
}

watch(index, (newIndex) => {
	currentImage = document.querySelector(`[data-images-container="${props.index}"] [data-index="${newIndex}"]`);
	currentImage.style.opacity = "1";
})



/**
 * Retourne l'index de l'image en fonction des coordonées x de la souris dans le container
 * 
 * @param {object} position 
 */
function getIndex(position){
	const unit = Math.floor(dimensions.width / gridSize);
	return (Math.floor(position.x / unit));
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

<style scoped>
	img {
		pointer-events: none;
		height: 100%;

		position: absolute;
		opacity: 0;
		z-index: 1;
	}

	div[data-images-container]{
		position: relative;
	}
</style>

