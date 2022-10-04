<script setup>
import { onMounted } from 'vue';

	const colors = [
		{
			name: "Darker",
			primary: "#000000",
			secondary: "#FFFFFF"
		},
		{
			name: "Passion",
			primary: "#FF0000",
			secondary: "#FFFFFF"
		},
		{
			name: "Jelly",
			primary: "#BBFF65",
			secondary: "#969696"
		}
	]

	onMounted(() => {
		const randomColor = colors[getRandomInteger(colors.length)];
		document.querySelector(':root').style.setProperty('--primary-color', randomColor.primary);
		document.querySelector(':root').style.setProperty('--secondary-color', randomColor.secondary);
		console.log(randomColor.name);

	})



	function getRandomInteger(max){
		return Math.floor(Math.random() * max);
	}
</script>

<template>
  <router-view />
</template>

