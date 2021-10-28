<template>
  <router-link to="/">Home</router-link>
  <div v-if="projects">
    <ProjectsList :projects="projects" />
  </div>
</template>

<script setup>
import { usePrismic } from '@prismicio/vue';
import { ref } from 'vue';
import ProjectsList from '../components/ProjectsList.vue';

const { client, predicate } = usePrismic();
let projects = ref(null);

async function getContent() {
  const allDocuments = await client.query('');
  // Temporary fix for fetching with query
  projects.value = allDocuments.results.filter(doc => doc.type === 'project');
  // response.value = await client.query([ predicate.at('document.type', 'project') ], {});
  console.log(projects.value);
}

getContent()
</script>
