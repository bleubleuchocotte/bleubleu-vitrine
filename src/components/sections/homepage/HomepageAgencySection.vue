<script setup>
import AgencyContent from './content/AgencyContent.vue';
import {ref} from "vue"

const property = ref([
	{
		text: "sound design",
		styles: {
			left: "50%",
			top: "34px",
			zIndex: 3,
		},
	},
	{
		text: "web dev",
		styles: {
			left: "0%",
			top: "105px",
			zIndex: 3,
		},
	},
	{
		text: "motion design",
		styles: {
			left: "0%",
			top: "136px",
			zIndex: 3,
		},
	},
	{
		text: "brand identity",
		styles: {
			left: "0%",
			top: "195px",
			zIndex: 3,
		},
	},
	{
		text: "ux/ui design",
		styles: {
			left: "0%",
			top: "237px",
			zIndex: 3,
		},
		speed: 1
	},
	{
		text: "graphic design",
		styles: {
			left: "0%",
			top: "64px",
			zIndex: 3,
		},
		speed: 1
	}
])
</script>

<template>
  <AgencyContent :properties="property" />
</template>
