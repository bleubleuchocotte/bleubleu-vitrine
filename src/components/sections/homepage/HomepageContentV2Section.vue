<template>
  <section class="section">
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
	.section{
		display: flex;
		flex-direction: column;

		padding: 0 $global-horizontal-padding 0 $global-horizontal-padding;
		border-bottom: 1px solid $primary;
	}
</style>