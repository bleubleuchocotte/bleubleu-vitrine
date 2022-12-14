<script setup>
import { defineProps, ref, onMounted } from 'vue';
import ScrollMovingText from '../../../UI/AgencyTextScrolling.vue';

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
    threshold: 0,
  };

  let callback = (entries) => {
    entries[0].isIntersecting
      ? (isInView.value = true)
      : (isInView.value = false);
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(sectionHTML.value);
}

let sectionHTML = ref();
const isInView = ref(false);
</script>

<template>
  <div
    ref="sectionHTML"
    class="container"
  >
    <div class="border" />
    <ScrollMovingText
      v-for="(property, index) in properties"
      :key="index"
      :text="property.data.text[0].text"
      :speed="property.data.speed / 100"
      :styles="property.data.css_style[0].text"
      :is-in-view="isInView"
      :direction="property.data.direction"
      :container="sectionHTML"
    />
  </div>
</template>

<style scoped lang="scss">
	.container{
		height: 350px;
		position: relative;
	}

	.border{
		width: 100%;
		height: 100%;

		border-left: 1px solid $primary;
		border-right: 1px solid $primary;
	}
</style>