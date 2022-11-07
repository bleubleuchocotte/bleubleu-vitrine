<template>
  <div
    v-if="document && keywordsProperties && projects"
    class="home-page"
  >
    <Header :socials="document.data.socials" />

    <HomepageAgencySection
      :fields="document.data"
      :keywords-properties="keywordsProperties"
    />
    <HomepageProjectSection
      :fields="projects"
    />
    <HomepageTeamSection :members="document.data.team_members" />

    <Footer />

    <Cursor class="only-desktop" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePrismic } from '@prismicio/vue';

import Header from '../components/layout/Header.vue';
import HomepageAgencySection from '../components/sections/homepage/HomepageAgencySection.vue';
import HomepageProjectSection from '../components/sections/homepage/HomepageProjectSection.vue';
import HomepageTeamSection from '../components/sections/homepage/HomepageTeamSection.vue';
import Footer from '../components/layout/Footer.vue';
import Cursor from '../components/UI/Cursor.vue';


const { client } = usePrismic();
let document = ref(null);
const projects = ref(null);
const keywordsProperties = ref(null);

async function getContent() {
  document.value = await client.getSingle('home_page', {
    fetchLinks: ['social_media.name', 'social_media.link'],
  }, null);
}

async function getProjects() {
  projects.value = await client.getAllByType('project')
}

async function getKeywords() {
  keywordsProperties.value = await client.getAllByType('keyword-agency');
}

getContent();
getProjects();
getKeywords();
</script>