<script setup>
	import { defineProps } from 'vue';
	import ProjectsContent from '@/components/sections/homepage/content/ProjectsContent.vue';
	
	defineProps({
		fields: {
			type: Array,
			required: true,
		}
	})
</script>

<template>
  <section id="project">
    <ProjectsContent :fields="fields" />
  </section>
</template>
  


<style scoped lang="scss">
#project {
	display: flex;
	flex-direction: column;

	padding: 0 $global-horizontal-padding 0 $global-horizontal-padding;
	@media #{$md-down} {
		padding-inline: 20px;
  }
	border-bottom: 1px solid $primary;

	&.transition-off {
		:deep(.article__top_left-title ) {
			transition-duration: 0s;
		}
	}
}
</style>