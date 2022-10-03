<script setup>
import AgencyContent from './content/AgencyContent.vue';
import {ref} from "vue"

const property = ref([
	{
		text: "sound design",
		direction: "ltr",
		styles: {
			left: "0%",
			top: "34px",
			zIndex: 3,
		},
	},
	{
		text: "web dev",
		direction: "ltr",
		styles: {
			left: "0%",
			top: "34px",
			zIndex: 3,
		},
	},
	{
		text: "motion design",
		direction: "rtl",
		styles: {
			left: "0%",
			top: "34px",
			zIndex: 3,
		},
	},
	{
		text: "brand identity",
		direction: "ltr",
		styles: {
			left: "0%",
			top: "34px",
			zIndex: 3,
		},
	},
	{
		text: "ux/ui design",
		direction: "rtl",
		styles: {
			left: "0%",
			top: "34px",
			zIndex: 3,
		},
	},
	{
		text: "graphic design",
		direction: "rtl",
		styles: {
			left: "0%",
			top: "34px",
			zIndex: 3,
		},
	}
])
</script>

<template>
  <AgencyContent :properties="property" />
</template>
