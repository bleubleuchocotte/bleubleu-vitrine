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

    <div
      ref="cursor"
      class="cursor"
    />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { usePrismic } from '@prismicio/vue';

import Header from '../components/layout/Header.vue';
import HomepageAgencySection from '../components/sections/homepage/HomepageAgencySection.vue';
import HomepageProjectSection from '../components/sections/homepage/HomepageProjectSection.vue';
import HomepageTeamSection from '../components/sections/homepage/HomepageTeamSection.vue';
import Footer from '../components/layout/Footer.vue';


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

const cursor = ref();


watch(cursor, () => {
  window.addEventListener('mousemove', (arg) => {
    cursor.value.style.transform = `translate(${arg.clientX - 30}px, ${arg.clientY-30}px)`;

    if (arg.target.localName === "a"){
      cursor.value.style.filter = "none";
      cursor.value.style.transform = `translate(${arg.clientX - 30}px, ${arg.clientY-30}px) scale(0.7)`;
    } else {
      cursor.value.style.filter = "blur(15px)"
      cursor.value.style.transform = `translate(${arg.clientX - 30}px, ${arg.clientY-30}px) scale(1)`;
    }
  })

})
</script>

<style scoped lang="scss">
.cursor{
  position: fixed;
  top: 0;
  left: 0;

  transform-origin: center;

  border-radius: 50%;

  width: 80px;
  height: 80px;

  filter: blur(15px);

  background-color: $primary;

  z-index: 1000;

  transition: transform 0.1s ease;
  transition: filter 0.1s ease;

  pointer-events: none;
}

</style>
