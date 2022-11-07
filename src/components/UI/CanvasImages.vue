<script setup>

import {onMounted, ref} from "vue";
import img from "@/assets/img/logo-bleubleu.jpg";

function test(arg){

	const position = {
		x: arg.offsetX,
		y: arg.offsetY
	}
	paint(position, ctx, dimensions);
}

const canvas = ref();
let ctx, dimensions, primaryColor;

onMounted(() => {
	ctx = canvas.value.getContext("2d");
	primaryColor = document.querySelector(':root').style.getPropertyValue("--primary-color");

	ctx.strokeStyle = primaryColor;


	dimensions = {
		width: canvas.value.width,
		height: 250,
		scaleX: canvas.value.clientWidth / canvas.value.width,
		scaleY: 250 / canvas.value.height
	}

})

/**
 * 
 * @param {Object} position 
 */
function paint(position, ctx, dimensions){

	const scale = 0.5;

	const baseImage = new Image();
	baseImage.src = img;

	const width = baseImage.width / dimensions.scaleX;
	const height = baseImage.height / dimensions.scaleY;

	const x = (position.x / dimensions.scaleX) - width*scale/2;
	const y = (position.y / dimensions.scaleY) - height*scale/2;

	baseImage.onload = function(){
		ctx.drawImage(baseImage, x - width*scale/2, y - height*scale/2, width*scale, height*scale);
		setTimeout(erase, 3000, ctx, x - width*scale/2, y - height*scale/2, width, height);
	}



}

function erase(ctx, x, y, width, height){
	ctx.clearRect(x, y, width, height);
}
	
</script>

<template>
  <canvas
    ref="canvas"
    @mousemove="test"
  />
</template>