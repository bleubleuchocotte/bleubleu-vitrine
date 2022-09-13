<template>
  <PrismicRichText
    v-if="field != null"
    :field="field"
    class="blurText"
  />
  <p
    v-else
    class="blurText"
  >
    {{ text }}
  </p>
</template>

<script setup>
	import { defineProps} from 'vue';
	defineProps({
		field: {
			type: Array,
			required: false,
			default: null
		},
		text: {
			type: String,
			required: false,
			default: ""
		}
	})


</script>

<script scoped>

	document.addEventListener('mousemove', updateBlur);
	
	function updateBlur(arg){

		const targets = document.getElementsByClassName("blurText");

		Array.from(targets).forEach(el => {
			const bounding = el.getBoundingClientRect();

			const mousePosition = {
				x : arg.clientX,
				y : arg.clientY
			}

			const circleOutside = {
				x : bounding.x + bounding.width / 2,
				y : bounding.y + bounding.height / 2,
				// radius : (Math.max(bounding.width, bounding.height) / 2),
				radiusX : (bounding.width / 2),
				radiusY : (bounding.height / 2),
				focalPlus : {x : 0, y : 0},
				focalMinus : {x : 0, y : 0}
			}

			const DISTANCE = distance(mousePosition, circleOutside);
			const blurIntensity = blur(DISTANCE, circleOutside.radiusX);
			computeFocals(circleOutside)
			distanceFromClosestFocal(mousePosition, circleOutside)

			// console.log(distanceFromClosestFocal(mousePosition, circleOutside), "oui");

			el.style = `filter: blur(${blurIntensity*.01}px)`;


			const circle = document.createElement('div');
			// circle.style = `width: ${circleOutside.radiusX * 2}px; height: ${circleOutside.radiusY * 2}px; top: ${circleOutside.y - (bounding.y + circleOutside.radiusX)}px; left: ${circleOutside.x - (bounding.x + circleOutside.radiusX)}px; position: absolute; border-radius: 100%; border: 1px solid red`;
			circle.style = `width: ${circleOutside.radiusX * 2}px; height: ${circleOutside.radiusY * 2}px; top: ${circleOutside.y - (bounding.y + circleOutside.radiusY)}px; left: ${circleOutside.x - (bounding.x + circleOutside.radiusX)}px; position: absolute; border-radius: 100%; border: 1px solid red`;
			el.appendChild(circle);

			const focalA = document.createElement('div');
			focalA.style = `width: 1px; height: 1px; top: ${circleOutside.focalPlus.y - (bounding.y + circleOutside.radiusY)}px; left: ${circleOutside.focalPlus.x - (bounding.x + circleOutside.radiusX)}px; position: absolute; border-radius: 100%; border: 1px solid red`;
			el.appendChild(focalA);

		})

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
	 * @param {object} ellipse
	 */
	function computeFocals(ellipse){
		if (Math.max(ellipse.radiusX, ellipse.radiusY) == ellipse.radiusX){
			const c = Math.sqrt(Math.pow(ellipse.radiusX, 2) - Math.pow(ellipse.radiusY, 2));
			ellipse.focalPlus = {x: ellipse.x + c, y : ellipse.y}
			ellipse.focalMinus = {x: ellipse.x - c, y : ellipse.y}
		} else {
			const c = Math.sqrt(Math.pow(ellipse.radiusY, 2) - Math.pow(ellipse.radiusX, 2));
			ellipse.focalPlus = {x: ellipse.x, y : ellipse.y + c}
			ellipse.focalMinus = {x: ellipse.x, y : ellipse.y - c}
		}
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

	/**
	 * @param {object} point
	 * @param {object} ellipse
	 */
	function distanceFromClosestFocal(point, ellipse){
		console.log(distance(point, ellipse.focalPlus) > distance(point, ellipse.focalMinus));
		// if (distance(point, ellipse.focalPlus) > distance(point, ellipse.focalMinus)){
		// 	// return distance(point, ellipse.focalMinus);
		// } else {
		// 	return distance(point, ellipse.focalPlus);
		// }

		// return (distance(point, ellipse.focalPlus) > distance(point, ellipse.focalMinus)) ? distance(point, ellipse.focalMinus) : distance(point, ellipse.focalPlus);
	}
</script>

<style scoped>
</style>