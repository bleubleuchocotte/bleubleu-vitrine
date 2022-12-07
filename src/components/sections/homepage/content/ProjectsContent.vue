<script setup>

import { defineProps } from 'vue';
import ProjectRepresentation from '@/components/UI/ProjectRepresentation.vue';

defineProps({
	fields: {
		type: Array,
		required: true,
	}
})
</script>

<template>
  <ProjectRepresentation
    v-for="(project, index) in fields"
    :key="index"
    :project="project"
  />
</template>