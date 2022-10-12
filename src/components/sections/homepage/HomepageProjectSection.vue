<script setup>
	import { defineProps } from 'vue';
	import ProjectsContent from './content/ProjectsContent.vue';
	
	defineProps({
		fields: {
			type: Array,
			required: true,
		}
	})
</script>

<template>
  <section
    id="project"
    class="section"
  >
    <ProjectsContent :fields="fields" />
  </section>
</template>
  


<style scoped lang="scss">
.section{
	display: flex;
	flex-direction: column;

	padding: 0 $global-horizontal-padding 0 $global-horizontal-padding;
	border-bottom: 1px solid $primary;
}
</style>