<script setup>

import { defineProps } from 'vue';

const props = defineProps({
fields: {
	type: Array,
	required: true,
}

})
console.log(props.fields);

</script>

<template>
  <!-- <div
    v-for="(project, index) in props.fields"
    :key="index"
  >
    <pre>{{ project.data }}</pre>
  </div> -->


  <article>
    <p>popcorn x bleubleu</p>
    <p>2022</p>
  </article>
</template>

<style scoped lang="scss"></style>