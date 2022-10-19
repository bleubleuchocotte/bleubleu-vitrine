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
	column = props.images.length;
	row = 2;
	dimensions = {
		width: container.value.clientWidth,
		height: 500
	}
})

const container = ref();
const index = ref(-1);
let dimensions, column, row;

let currentImage, lastImage;



function updateImage(arg){
	const position = {
		x: arg.offsetX,
		y: arg.offsetY
	}
	index.value = getIndex(position);
	if (currentImage) {
		currentImage.style.transform = `translate(${position.x - currentImage.clientWidth/2}px, ${position.y}px)`;
		currentImage.style.zIndex = "1002";
	}
}

watch(index, (newIndex, oldIndex) => {
	if (oldIndex != -1){
		lastImage = document.querySelector(`[data-images-container="${props.index}"] [data-index="${oldIndex}"]`);
		lastImage.style.zIndex = "1001";
	}

	currentImage = document.querySelector(`[data-images-container="${props.index}"] [data-index="${newIndex}"]`);
	currentImage.style.opacity = "1";
	currentImage.style.height = "50%";
	setTimeout(() => {
		const test = document.querySelector(`[data-images-container="${props.index}"] [data-index="${newIndex}"]`);
		test.style.opacity = "0";
		test.style.height = "25%";
	}, 1000);


})

/**
 * Retourne l'index de l'image en fonction des coordonées (x,y) de la souris dans le container
 * 
 * @param {object} position 
 */
function getIndex(position){
	const unitX = Math.floor(dimensions.width / column);
	const unitY = Math.floor(dimensions.height / row);
	return ( (Math.floor(position.x / unitX) + Math.floor(position.y / unitY)) % (props.images.length));	
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
		height: 50%;

		position: absolute;
		opacity: 0;
		bottom: 75%;
		transition: opacity 0.4s $ease-vnr, height 0.4s $ease-vnr;
	}

	div[data-images-container]{
		position: absolute;
	}

</style>

