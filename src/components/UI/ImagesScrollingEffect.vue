<script setup>
import {defineProps, defineEmits, onMounted, onUnmounted, ref, watch} from "vue";

const props = defineProps({
	images: {
		type: Array,
		required: true
	}
})

const emit = defineEmits(['currentImage']);

onMounted(() => {
	window.addEventListener('resize', updateGridSize);
	updateGridSize();
	dimensions = {
		width: container.value.clientWidth,
		height: 500
	}
})

onUnmounted(() => {
	window.removeEventListener('resize', updateGridSize)
})

const container = ref();
const index = ref(-1);
let dimensions, column, row;

const image = ref();

let counter = 0;

let currentMousePos = null;
let lastMousePos = {};

function updateGridSize() {
	if (window.innerWidth < 767) {
		column = 5;
		row = 4;
	} else {
		column = 7;
		row = 2;
	}
}

function leaveContainer(){
	currentMousePos = null;
	lastMousePos = null;
}

function updateImage(arg){
	currentMousePos ? lastMousePos = currentMousePos : lastMousePos = null;
	currentMousePos = {
		x: arg.offsetX,
		y: arg.offsetY
	}
	if (lastMousePos) {
		index.value = getIndex(currentMousePos);
	}
}

watch(index, () => {
	image.value = container.value.querySelector(`[data-index="${counter % props.images.length}"]`)
	if (!image.value) {
		return 0;
	}
	image.value.positions = {
		last: lastMousePos,
		current: currentMousePos
	}
	counter += 1;
})

watch(image, (newImage) => {
	emit("currentImage", image);
	if (newImage) {
		if (newImage.animation) {
			newImage.animation.cancel();
			newImage.animation = {};
		}
		newImage.animation = getAnimationObject(newImage, 1, 0.2, 0.03, counter);
		newImage.animation.init(600);
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

function getAnimationObject(element, initValue, endValue, stepValue, zIndex) {
	const animation =  {
		initValue: initValue,
		endValue: endValue,
		stepValue: stepValue,
		el: element,
		zIndex: zIndex,

		renderScaleDown: function () {
			if (animation.currentValue > animation.endValue) {

				animation.el.style = `transform: translate(${animation.x - animation.el.clientWidth / 2}px, ${animation.y  - animation.el.clientHeight / 2}px) scale(${animation.currentValue}); opacity: ${animation.currentValue - 0.25}; z-index: 1001`;
				animation.update();
				animation.requestScaleDownID = requestAnimationFrame(animation.renderScaleDown);
			}
		},

		renderInertie: function() {
			animation.x = animation.lerp(animation.x, animation.el.positions.last.x, 0.1);
			animation.y = animation.lerp(animation.y, animation.el.positions.last.y, 0.1);

			animation.el.style = `transform: translate(${animation.x - animation.el.clientWidth / 2}px, ${animation.y  - animation.el.clientHeight / 2}px) scale(1); opacity: 1; z-index: ${animation.zIndex + 1000}`;

			if (!animation.requestScaleDownID) {
				animation.requestInertieID = requestAnimationFrame(animation.renderInertie);
			} 
		
		},

		update: function() {
			animation.currentValue -= animation.stepValue;
		},

		lerp: function(start, end, amt){
			return (1-amt)*start+amt*end
		},


		/**
		 * 
		 * @param {number} delay Delay in milliseconds 
		 */
		init: function(delay) {
			animation.currentValue = animation.initValue;
			animation.x = animation.el.positions.current.x;
			animation.y = animation.el.positions.current.y;
			animation.requestScaleDownID = null;

			animation.requestInertieID = requestAnimationFrame(animation.renderInertie)

			animation.timeoutID = setTimeout(() => {
				animation.requestScaleDownID = requestAnimationFrame(animation.renderScaleDown);
			}, delay);
		},

		cancel: function(){
			clearTimeout(animation.timeoutID);
			cancelAnimationFrame(animation.requestScaleDownID);
			cancelAnimationFrame(animation.requestInertieID);
		}
	}

	return animation;
}
</script>


<template>
  <div
    ref="container"
    class="images-scrolling__container"
    @mousemove="updateImage"
    @mouseleave="leaveContainer"
  >
    <template 
      v-for="(imageLoop, key) in images"
      :key="key"
    >
      <img
        v-if="imageLoop.media.url"
        :src="imageLoop.media.url"
        :alt="imageLoop.media.alt ? imageLoop.media.alt : ''"
        :data-index="key"
        width="640"
        height="340"
      >
    </template>
  </div>
</template>

<style scoped lang="scss">
	.images-scrolling__container img {
		height: 275px;
		width: 450px;

		@media #{$md-down} {
			width: 225px;
			height: 137px;
		}
		border: 1px solid $primary;
		pointer-events: none;
		
		opacity: 0;

		position: absolute;
	}

	.images-scrolling__container{
		position: absolute;
	}

</style>

