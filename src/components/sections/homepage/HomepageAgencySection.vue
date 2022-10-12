<script setup>
import AgencyKeywords from './content/AgencyKeywords.vue';
import AgencyContent from './content/AgencyContent.vue';
import { ref, defineProps } from "vue"

defineProps({
	fields: {
    type: Object,
    required: true,
  },
})

const property = ref([
	{
		text: "sound design",
		direction: "rtl",
		styles: {
			right: "0",
			top: "34px",
			zIndex: 3,
		},
		speed: 1
	},
	{
		text: "web dev",
		direction: "ltr",
		styles: {
			left: "0%",
			top: "105px",
			zIndex: 3,
		},
	},
	{
		text: "motion design",
		direction: "ltr",
		styles: {
			left: "0%",
			top: "136px",
			zIndex: 3,
		},
		speed: 1.25
	},
	{
		text: "brand identity",
		direction: "rtf",
		styles: {
			left: "10%",
			top: "195px",
			zIndex: 3,
		},
		speed: 0.15
	},
	{
		text: "ux/ui design",
		direction: "ltr",
		styles: {
			left: "0%",
			top: "237px",
			zIndex: 3,
		},
		speed: 1
	},
	{
		text: "graphic design",
		direction: "ltr",
		styles: {
			left: "0%",
			top: "64px",
			zIndex: 3,
		},
		speed: 0.75
	}
])
</script>

<template>
  <section id="agency">
    <AgencyContent :fields="fields" />
    <AgencyKeywords :properties="property" />
  </section>
</template>
