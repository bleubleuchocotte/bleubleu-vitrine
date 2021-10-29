<template>
  <div
    v-if="document"
    class="home-page"
  >
    <Header />
    <HomepageEntrySection :socials="document.data.socials" />
    <HomepageTeamSection :members="document.data.team_members" />
    <Footer />
  </div>

  <span class="line-top o-grid-item--full-top" />
  <span class="line-bottom o-grid-item--full-bottom" />
</template>

<script setup>
import { ref } from 'vue';
import { usePrismic } from '@prismicio/vue';
import Header from '../components/layout/Header.vue'
import HomepageEntrySection from '../components/sections/homepage/HomepageEntrySection.vue';
import HomepageTeamSection from '../components/sections/homepage/HomepageTeamSection.vue';
import Footer from '../components/layout/Footer.vue';

const { client } = usePrismic();
let document = ref(null);

async function getContent() {
  document.value = await client.getSingle('home_page', {
    fetchLinks: ['social_media.name', 'social_media.link'],
  }, null);
  console.log(document.value);
}

getContent()
</script>
