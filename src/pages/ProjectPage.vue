<template>
  <router-link to="/">
    Home
  </router-link>
  <div v-if="projects">
    <ProjectsList :projects="projects" />
  </div>
</template>

<script setup>
import { usePrismic } from '@prismicio/vue';
import { ref } from 'vue';
import ProjectsList from '../components/ProjectsList.vue';

const { client } = usePrismic();
let projects = ref(null);

async function getContent() {
  projects.value = (await client.getByType('project')).results;
  console.log(projects.value);
}

getContent()
</script>
