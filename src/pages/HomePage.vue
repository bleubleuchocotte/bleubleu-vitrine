<template>
  <div
    v-if="document"
    class="homepage"
  >
    <Header />
    <HomepageEntrySection :socials="document.data.socials" />
    <Team :members="document.data.team_members" />
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/layout/Header.vue'
import Team from '../components/sections/homepage/HomepageTeamSection.vue';
import { usePrismic } from '@prismicio/vue';
import { ref } from 'vue';
import Footer from '../components/layout/Footer.vue';
import HomepageEntrySection from '../components/sections/homepage/HomepageEntrySection.vue';

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
