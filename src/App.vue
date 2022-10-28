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
		},
		{
			name: "Sky",
			primary: "#54ADFF",
			secondary: "#DEDEDE",
			filter: "invert(70%) sepia(53%) saturate(3790%) hue-rotate(183deg) brightness(101%) contrast(101%)"
		}
		,
		{
			name: "Mint",
			primary: "#62BFAD",
			secondary: "#F9F7E8",
			filter: "invert(71%) sepia(8%) saturate(1994%) hue-rotate(119deg) brightness(96%) contrast(86%)"
		}
		,
		{
			name: "Memory",
			primary: "#7B76A6",
			secondary: "#EEE9DC",
			filter: "invert(49%) sepia(10%) saturate(1339%) hue-rotate(207deg) brightness(96%) contrast(86%)"
		}
		,
		{
			name: "Pastel",
			primary: "#E2818A",
			secondary: "#EEE9DC",
			filter: "invert(66%) sepia(5%) saturate(3859%) hue-rotate(306deg) brightness(92%) contrast(92%)"
		}
		,
		{
			name: "Saguine",
			primary: "#FF4552",
			secondary: "#EFE8D8",
			filter: "invert(34%) sepia(45%) saturate(1875%) hue-rotate(323deg) brightness(121%) contrast(120%)"
		}
		,
		{
			name: "Cyan",
			primary: "#178E96",
			secondary: "#EFEAE5",
			filter: "invert(42%) sepia(66%) saturate(552%) hue-rotate(135deg) brightness(95%) contrast(87%)"
		}
		,
		{
			name: "Malabar",
			primary: "#FF8FA4",
			secondary: "#E5E8DC",
			filter: "invert(88%) sepia(33%) saturate(4570%) hue-rotate(296deg) brightness(102%) contrast(101%)"
		}
		,
		{
			name: "Kaki",
			primary: "#766C08",
			secondary: "#E7E7E7",
			filter: "invert(38%) sepia(66%) saturate(4118%) hue-rotate(46deg) brightness(88%) contrast(94%)"
		}
		,
		{
			name: "Grass",
			primary: "#26CB4D",
			secondary: "#F7F7F7",
			filter: "invert(65%) sepia(33%) saturate(1006%) hue-rotate(82deg) brightness(90%) contrast(93%)"
		}
		,
		{
			name: "Sea",
			primary: "#0B64FE",
			secondary: "#F2F2F2",
			filter: "invert(20%) sepia(100%) saturate(2631%) hue-rotate(217deg) brightness(108%) contrast(99%)"
		}
		,
		{
			name: "Polar",
			primary: "#FFFFFF",
			secondary: "#0E38B1",
			filter: "invert(92%) sepia(93%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%)"
		}
		,
		{
			name: "Halloween",
			primary: "#FF8A00",
			secondary: "#573A6D",
			filter: "invert(55%) sepia(72%) saturate(1497%) hue-rotate(357deg) brightness(98%) contrast(110%)"
		}
		,
		{
			name: "Golf",
			primary: "#FFFFFF",
			secondary: "#32B67A",
			filter: "invert(92%) sepia(93%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%)"
		}
		,
		{
			name: "Chaos",
			primary: "#EA1821",
			secondary: "#1B1D1C",
			filter: "invert(24%) sepia(83%) saturate(3362%) hue-rotate(344deg) brightness(87%) contrast(112%)"
		}
		,
		{
			name: "Beach",
			primary: "#0B64C0",
			secondary: "#FEFFCA",
			filter: "invert(16%) sepia(62%) saturate(6682%) hue-rotate(202deg) brightness(96%) contrast(91%)"
		}
		,
		{
			name: "Eniarku",
			primary: "#FBFE56",
			secondary: "#0B64C0",
			filter: "invert(100%) sepia(41%) saturate(3875%) hue-rotate(322deg) brightness(123%) contrast(99%)"
		}
		,
		{
			name: "Butterfly",
			primary: "#7A30CF",
			secondary: "#75FFC0",
			filter: "invert(21%) sepia(42%) saturate(6835%) hue-rotate(263deg) brightness(84%) contrast(90%)"
		}
		,
		{
			name: "Vintage",
			primary: "#FFCC4C",
			secondary: "#19AAD1",
			filter: "invert(96%) sepia(65%) saturate(4920%) hue-rotate(317deg) brightness(101%) contrast(102%)"
		}
		,
		{
			name: "Summer",
			primary: "#FEEA0D",
			secondary: "#FF6090",
			filter: "invert(94%) sepia(11%) saturate(6217%) hue-rotate(350deg) brightness(111%) contrast(99%)"
		}
		,
		{
			name: "Geiger",
			primary: "#7B76A6",
			secondary: "#F8DA1B",
			filter: "invert(49%) sepia(10%) saturate(1391%) hue-rotate(207deg) brightness(95%) contrast(86%)"
		}
		,
		{
			name: "Lavander",
			primary: "#112378",
			secondary: "#9B8FFF",
			filter: "invert(16%) sepia(37%) saturate(3775%) hue-rotate(219deg) brightness(89%) contrast(111%)"
		}
		,
		{
			name: "Tea",
			primary: "#9A008A",
			secondary: "#FFE6AD",
			filter: "invert(11%) sepia(93%) saturate(4325%) hue-rotate(297deg) brightness(95%) contrast(113%)"
		}
		,
		{
			name: "Macaron",
			primary: "#9C2525",
			secondary: "#FF8B8B",
			filter: "invert(13%) sepia(52%) saturate(4910%) hue-rotate(348deg) brightness(101%) contrast(85%)"
		}
	]


	onMounted(() => {
		const randomColor = colors[getRandomInteger(colors.length)];
		document.querySelector(':root').style.setProperty('--primary-color', randomColor.primary);
		document.querySelector(':root').style.setProperty('--secondary-color', randomColor.secondary);
		document.querySelector(':root').style.setProperty('--filter-to-primary', randomColor.filter);
		if (navigator.userAgent.match(/Android/i)) {
			document.querySelector(':root').style.setProperty('--android-line-height', "24px");
		}
		console.log(randomColor.name);

	})



	function getRandomInteger(max){
		return Math.floor(Math.random() * max);
	}
</script>

<template>
  <router-view />
</template>

