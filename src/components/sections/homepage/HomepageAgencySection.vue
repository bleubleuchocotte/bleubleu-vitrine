<script setup>
import AgencyContent from './content/AgencyContent.vue';
import {ref} from "vue"

const property = ref([
	{
		text: "sound design",
		direction: "ltr",
		position: {left: "50%", top: "34px"},
		zIndex: 3,
		speed: 1
	},
	{
		text: "web dev",
		direction: "ltr",
		position: {left: "50%", top: "105px"},
		zIndex: 1,
		speed: 1
	},
	{
		text: "motion design",
		direction: "rtl",
		position: {left: "50%", top: "136px"},
		zIndex: 2,
		speed: 1
	},
	{
		text: "brand identity",
		direction: "ltr",
		position: {left: "50%", top: "195px"},
		zIndex: 2,
		speed: 1
	},
	{
		text: "ux/ui design",
		direction: "rtl",
		position: {left: "50%", top: "237px"},
		zIndex: 2,
		speed: 1
	},
	{
		text: "graphic design",
		direction: "rtl",
		position: {left: "50%", top: "64px"},
		zIndex: 2,
		speed: 1
	}
])
</script>

<template>
  <AgencyContent :properties="property" />
</template>

<style></style>