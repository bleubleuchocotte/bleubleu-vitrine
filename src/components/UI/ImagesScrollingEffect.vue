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
	column = props.images.length * 4;
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


let counter = 0;





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
	containerImage.value = document.querySelector(`[data-images-container="${props.index}"] [data-index="${counter % props.images.length}"]`)
	counter += 1;
})

watch(containerImage, (newContainer, oldContainer) => {
	if (oldContainer){
		oldContainer.style.zIndex = "1001";

		oldContainer.animation =  {
			initValue: 1,
			endValue: 0,
			stepValue: 0.03,
			run: false,

			render: function () {
				if (oldContainer.animation.currentValue > oldContainer.animation.endValue) {
					oldContainer.style.opacity = `${oldContainer.animation.currentValue}`;
					oldContainer.animation.update();
					requestAnimationFrame(oldContainer.animation.render);
				}
			},

			update: function() {
				oldContainer.animation.currentValue -= oldContainer.animation.stepValue;
			},

			/**
			 * 
			 * @param {number} delay Delay in milliseconds 
			 */
			init: function(delay) {
				oldContainer.animation.timeoutID = setTimeout(() => {
					oldContainer.animation.currentValue = oldContainer.animation.initValue;
					oldContainer.animation.requestID = requestAnimationFrame(oldContainer.animation.render);
					oldContainer.animation.run = true;
				}, delay);
			},

			cancel: function(){
				clearTimeout(oldContainer.animation.timeoutID);
				cancelAnimationFrame(oldContainer.animation.requestID);
				oldContainer.animation.run = false;
			}
		}

		oldContainer.animation.init(400);
	}

	if (newContainer){
		image.value = newContainer.firstChild;
		newContainer.style.opacity = "1";

		if (newContainer.animation){
			newContainer.animation.cancel();
			newContainer.animation = {};
		}
	}
})

watch(image, (newImage, oldImage) => {
	if (oldImage) {

		oldImage.animation =  {
			initValue: 1,
			endValue: 0.2,
			stepValue: 0.03,
			run: false,

			render: function () {
				if (oldImage.animation.currentValue > oldImage.animation.endValue) {
					oldImage.style.transform = `scale(${oldImage.animation.currentValue})`;
					oldImage.animation.update();
					requestAnimationFrame(oldImage.animation.render);
				}
			},

			update: function() {
				oldImage.animation.currentValue -= oldImage.animation.stepValue;
			},

			/**
			 * 
			 * @param {number} delay Delay in milliseconds 
			 */
			init: function(delay) {
				oldImage.animation.timeoutID = setTimeout(() => {
					oldImage.animation.currentValue = oldImage.animation.initValue;
					oldImage.animation.requestID = requestAnimationFrame(oldImage.animation.render);
					oldImage.animation.run = true;
				}, delay);
			},

			cancel: function(){
				clearTimeout(oldImage.animation.timeoutID);
				cancelAnimationFrame(oldImage.animation.requestID);
				oldImage.animation.run = false;
			}
		}

		oldImage.animation.init(400);
	}

	if (newImage) {
		newImage.style.transform = "scale(1)";
	
		if (newImage.animation){
			newImage.animation.cancel();
			newImage.animation = {};
		}
	}
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
      v-for="(imageLoop, key) in images"
      :key="key"
      :ref="`image-${key}`"
      :data-index="key"
      class="image-container"
    >
      <img
        :src="imageLoop.media.url"
        :alt="imageLoop.media.alt"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
	img {
		background-color: $primary;
	}

	div[data-images-container]{
		position: absolute;
	}

	.image-container {
		position: absolute;
		height: 400px;
		width: 400px;

		opacity: 0;

		pointer-events: none;

	}
</style>

