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

const containerImage = ref();
const image = ref();

let currentImage;
let currentContainerImage, lastContainerImage;

let counter = 0;

const scaleDownSettings = [
	{opacity: '1', transform: "scale(1)"},
	{opacity: '0', transform: "scale(0.2)"}
]

const timing = {
	duration: 400,
	iteration: 1,
	delay: 1000
}



function updateImage(arg){
	const position = {
		x: arg.offsetX,
		y: arg.offsetY
	}
	index.value = getIndex(position);
	if (containerImage.value) {
		containerImage.value.style.transform = `translate(${position.x - containerImage.value.clientWidth / 2}px, ${position.y - containerImage.value.clientHeight / 2}px)`;
		containerImage.value.style.zIndex = "1002";
	}
	// if (currentContainerImage) {
	// 	currentContainerImage.style.transform = `translate(${position.x - currentContainerImage.clientWidth / 2}px, ${position.y - currentContainerImage.clientHeight / 2}px)`;
	// 	currentContainerImage.style.zIndex = "1002";
	// }
}

watch(index, () => {
	// if (counter != 0){
	// 	lastContainerImage = document.querySelector(`[data-images-container="${props.index}"] [data-index="${(counter-1) % props.images.length}"]`);
	// 	lastContainerImage.style.zIndex = "1001";
	// }


	// currentContainerImage = document.querySelector(`[data-images-container="${props.index}"] [data-index="${counter % props.images.length}"]`)
	containerImage.value = document.querySelector(`[data-images-container="${props.index}"] [data-index="${counter % props.images.length}"]`)

	// currentImage = currentContainerImage.firstChild;
	// currentImage.style.opacity = "1";

	// currentImage.animate(scaleDownSettings, timing);

	// Promise.all(
	// 	currentImage.getAnimations()
	// 	.map((animation) => animation.finished)
	// ).then((arg) => {
	// 	arg.forEach(el => {
	// 		el.effect.target.style.opacity = "0"; // Permet de remettre à 0 l'opacité de la target pour annuler l'animation après
	// 		el.cancel();
	// 	})
	// });

	counter += 1;
})

watch(containerImage, (newContainer, oldContainer) => {
	if (oldContainer){
		oldContainer.style.zIndex = "1001";
	}
	image.value = newContainer.firstChild;
})

watch(image, (newImage, oldImage) => {
	if (oldImage) {
		oldImage.style.opacity = "0";
		oldImage.style.transform = "scale(0.2)";
	}
	newImage.style.opacity = "1";
	newImage.style.transform = "scale(1)";
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
    <div
      v-for="(image, key) in images"
      :key="key"
      :ref="`image-${key}`"
      :data-index="key"
      class="image-container"
    >
      <img
        :src="image.media.url"
        :alt="image.media.alt"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
	img {
		opacity: 0;

		transition: opacity 0.4s $ease-vnr, transform 0.4s $ease-vnr;
	}

	div[data-images-container]{
		position: absolute;
	}

	.image-container {
		position: absolute;
		height: 400px;
		width: 400px;

		pointer-events: none;
	}
</style>

