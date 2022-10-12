<template>
  <div
    v-if="document"
    class="home-page"
  >
    <Header :socials="document.data.socials" />
    <HomepageAgencySection :fields="document.data" />
    <HomepageProjectSection :fields="projects" />


    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePrismic } from '@prismicio/vue';

import Header from '../components/layout/Header.vue';
import HomepageAgencySection from '../components/sections/homepage/HomepageAgencySection.vue';
import HomepageProjectSection from '../components/sections/homepage/HomepageProjectSection.vue';
import Footer from '../components/layout/Footer.vue';


const { client } = usePrismic();
let document = ref(null);
const projects = ref();

async function getContent() {
  document.value = await client.getSingle('home_page', {
    fetchLinks: ['social_media.name', 'social_media.link'],
  }, null);
}
async function getProjects() {
  projects.value = await client.getAllByType('project')
}

getContent();
getProjects();
</script>
