<script setup>
import { defineProps, ref, onMounted } from 'vue';
import { useMedia } from "@/composables/useMedia.js"
import ProjectRepresentation from '@/components/UI/ProjectRepresentation.vue';

const props = defineProps({
	fields: {
		type: Array,
		required: true,
	}
})

onMounted(() => {
  bufferDatas.value = props.fields;
  bufferDatas.value.sort(compareFn)
})

function compareFn(a, b) {
  if (a.data.date > b.data.date) {
    return -1;
  }
  if (a.data.date < b.data.date) {
    return 1;
  }
  return 0;
}

const bufferDatas = ref([])

const hasMouse = ref(useMedia('(pointer: fine)'));
</script>

<template>
  <ProjectRepresentation
    v-for="(project, index) in bufferDatas"
    :key="index"
    :project="project"
    :active-mouse-effect="hasMouse"
  />
</template>