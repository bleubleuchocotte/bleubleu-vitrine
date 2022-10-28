<template>
  <div
    v-if="field != null"
    ref="target"
  >
    <PrismicRichText
      :field="field"
    />
  </div>

  <p
    v-else
    ref="target"
    class="blurText"
  >
    {{ text }}
  </p>
</template>

<script setup>
	import { defineProps, onMounted, onUnmounted, ref } from 'vue';
	defineProps({
		field: {
			type: Array,
			default: null
		},
		text: {
			type: String,
			default: ""
		}
	})

	const target = ref();

	onMounted(function () {
		document.addEventListener('mousemove', updateBlur);
	})
	onUnmounted(function(){
		document.removeEventListener('mousemove', updateBlur);
	})


	function updateBlur(arg) {
		const el = target.value;
		const bounding = el.getBoundingClientRect();

		const mousePosition = {
			x : arg.clientX,
			y : arg.clientY
		}

		const circleOutside = {
			x : bounding.x + bounding.width / 2,
			y : bounding.y + bounding.height / 2,
			radius : (Math.max(bounding.width, bounding.height) / 2),
		}

		const DISTANCE = distance(mousePosition, circleOutside);
		const blurIntensity = blur(DISTANCE, circleOutside.radius);

		el.style = `filter: blur(${blurIntensity*.01}px)`;

		/**
		* Permet d'avoir un affichage visuel de la zone à laquelle le blur s'efface (A enlever lors de la mise en prod)
		*/
		// const circle = document.createElement('div');
		// circle.style = `width: ${circleOutside.radius * 2}px; height: ${circleOutside.radius * 2}px; top: ${circleOutside.y - (bounding.y + circleOutside.radius)}px; left: ${circleOutside.x - (bounding.x + circleOutside.radius)}px; position: absolute; border-radius: 100%; border: 1px solid red`;
		// el.appendChild(circle);
	}

	/**
	 * @param {object} pointA
	 * @param {object} pointB
	 * @param {number} pointA.x
	 * @param {number} pointA.y
	 * @param {number} pointB.x
	 * @param {number} pointB.y
	 */
	function distance(pointA, pointB){
		return Math.sqrt( Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
	}

	/**
	 * @param {number} distance
	 * @param {number} distanceMin
	 */
	function blur(distance, distanceMin){

		if (distance > distanceMin){

			if (distance - distanceMin > 500){
				return 500;
			} else {
				return distance - distanceMin;
			}

		} 

		return 0;
	}

</script>

<style scoped lang="scss">

div {
	line-height: $android-line-height;
}

</style>
