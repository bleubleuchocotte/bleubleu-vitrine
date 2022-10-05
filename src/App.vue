<script setup>
import { onMounted } from 'vue';

	const colors = [
		{
			name: "Darker",
			primary: "#000000",
			secondary: "#FFFFFF",
			filter: "none"
		},
		{
			name: "Passion",
			primary: "#FF0000",
			secondary: "#FFFFFF",
			filter: "invert(19%) sepia(77%) saturate(6759%) hue-rotate(359deg) brightness(91%) contrast(124%)"
		},
		{
			name: "Jelly",
			primary: "#BBFF65",
			secondary: "#969696",
			filter: "invert(81%) sepia(17%) saturate(1281%) hue-rotate(40deg) brightness(111%) contrast(101%)"
		}
	]

	onMounted(() => {
		const randomColor = colors[getRandomInteger(colors.length)];
		document.querySelector(':root').style.setProperty('--primary-color', randomColor.primary);
		document.querySelector(':root').style.setProperty('--secondary-color', randomColor.secondary);
		document.querySelector(':root').style.setProperty('--filter-to-primary', randomColor.filter);
		console.log(randomColor.name);

	})



	function getRandomInteger(max){
		return Math.floor(Math.random() * max);
	}
</script>

<template>
  <router-view />
</template>

