<template>
  <div
    v-if="document"
    class="home-page"
  >
    <HeaderNewDesign :socials="document.data.socials" />
    <HomepageAfterHeaderSection :fields="document.data" />
    <HomepageAgencySection />
    <HomepageContentV2Section :fields="projects" />


    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePrismic } from '@prismicio/vue';
import Footer from '../components/layout/Footer.vue';
import HeaderNewDesign from '../components/layout/HeaderNewDesign.vue';
import HomepageAfterHeaderSection from '../components/sections/homepage/HomepageAfterHeaderSection.vue';
import HomepageAgencySection from '../components/sections/homepage/HomepageAgencySection.vue';

import HomepageContentV2Section from '../components/sections/homepage/HomepageContentV2Section.vue';

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
