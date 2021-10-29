<template>
  <div v-if="projects">
    <router-link to="/">
      Home
    </router-link>
    <ProjectsList :projects="projects" />
  </div>
  <span class="line-top o-grid-item--full-top" />
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

<style>
.projects-page {

}
</style>
