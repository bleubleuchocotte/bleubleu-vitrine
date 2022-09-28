<script setup>
	import { defineProps } from 'vue';
import ScrollMovingText from '../../../UI/ScrollMovingText.vue';

	defineProps({
		properties: {
			type: Array,
			required: true,
		}
	})
</script>

<template>
  <section>
    <div class="border" />
    <ScrollMovingText
      v-for="(property, index) in properties"
      :key="index"
      :text="property.text"
      :direction="property.direction"
      :speed="property.speed"
      :left="property.position.left"
      :top="property.position.top"
      :z-index="property.zIndex"
    />
  </section>
</template>

<style scoped lang="scss">
	section{
		height: 3500px;
		padding: 0 $global-horizontal-padding 0 $global-horizontal-padding;
		border-bottom: 1px solid $green;
		position: relative;
	}

	.border{
		width: 100%;
		height: 100%;

		border-left: 1px solid $green;
		border-right: 1px solid $green;
	}
</style>