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
	column = props.images.length * 3;
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
}

watch(index, () => {
	containerImage.value = document.querySelector(`[data-images-container="${props.index}"] [data-index="${counter % props.images.length}"]`)
	counter += 1;
})

watch(containerImage, (newContainer, oldContainer) => {
	if (oldContainer){
		oldContainer.style.zIndex = "1001";

		oldContainer.animation = getAnimationObject(oldContainer, 1, -0.5, 0.06, "opacity");
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
		oldImage.animation = getAnimationObject(oldImage, 1, 0.2, 0.03, "scale");
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

function getAnimationObject(element, initValue, endValue, stepValue, mode = "scale") {
	const animation =  {
		initValue: initValue,
		endValue: endValue,
		stepValue: stepValue,
		el: element,

		render: function () {
			if (animation.currentValue > animation.endValue) {
				mode == "opacity" ? animation.el.style.opacity = `${animation.currentValue}` : animation.el.style.transform = `scale(${animation.currentValue})`;
				animation.update();
				animation.requestID = requestAnimationFrame(animation.render);
			}
		},

		update: function() {
			animation.currentValue -= animation.stepValue;
		},

		/**
		 * 
		 * @param {number} delay Delay in milliseconds 
		 */
		init: function(delay) {
			animation.timeoutID = setTimeout(() => {
				animation.currentValue = animation.initValue;
				animation.requestID = requestAnimationFrame(animation.render);
			}, delay);
		},

		cancel: function(){
			clearTimeout(animation.timeoutID);
			cancelAnimationFrame(animation.requestID);
		}
	}

	return animation;
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
		height: 100%;
	}

	div[data-images-container]{
		position: absolute;
	}

	.image-container {
		position: absolute;
		height: 400px;
		width: 400px;

		opacity: 0;

		border: 1px solid $primary;

		// transition: opacity 0.1s $ease-vnr;

		pointer-events: none;
	}
</style>

