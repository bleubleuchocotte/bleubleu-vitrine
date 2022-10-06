<template>
  <section>
    <ProjectsV2Content :fields="fields" />
  </section>
</template>
  
<script setup>
import { defineProps } from 'vue';
import ProjectsV2Content from './content/ProjectsV2Content.vue';
  
defineProps({
	fields: {
		type: Array,
		required: true,
	}
})
</script>

<style lang="scss">

</style>