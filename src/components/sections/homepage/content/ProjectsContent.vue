<script setup>
import { defineProps, ref } from 'vue';
import { useMedia } from "@/composables/useMedia.js"
import ProjectRepresentation from '@/components/UI/ProjectRepresentation.vue';

defineProps({
	fields: {
		type: Array,
		required: true,
	}
})

const hasMouse = ref(useMedia('(pointer: fine)'));
</script>

<template>
  <ProjectRepresentation
    v-for="(project, index) in fields"
    :key="index"
    :project="project"
    :active-mouse-effect="hasMouse"
  />
</template>