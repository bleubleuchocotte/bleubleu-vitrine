<script setup>
import { defineProps, ref, onMounted } from 'vue';
import ScrollMovingText from '../../../UI/ScrollMovingText.vue';

defineProps({
	properties: {
		type: Array,
		required: true,
	}
})

onMounted(() => {
  createIntersectionObserver();
});

function createIntersectionObserver() {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  let callback = (entries) => {
    console.log(entries);
    entries[0].isIntersecting
      ? (isInView.value = true)
      : (isInView.value = false);
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(sectionHTML.value);
}

const sectionHTML = ref(null);
const isInView = ref(false);
</script>

<template>
  <section ref="sectionHTML">
    <div class="border" />
    <ScrollMovingText
      v-for="(property, index) in properties"
      :key="index"
      :text="property.text"
      :speed="property.speed"
      :styles="property.styles"
      :is-in-view="isInView"
    />
  </section>
</template>

<style scoped lang="scss">
	section{
		height: 350px;
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