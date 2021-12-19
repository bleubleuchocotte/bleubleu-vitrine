<template>
  <div
    v-if="document"
    class="home-page"
  >
    <HomepageHeader :socials="document.data.socials" />
    <HomepageContentSection :fields="document.data" />
    <HomepageTeamSection :members="document.data.team_members" />
    <Footer />
  </div>

  <span class="line-top o-grid-item--full-top" />
  <span class="line-bottom o-grid-item--full-bottom" />
</template>

<script setup>
import { ref } from 'vue';
import { usePrismic } from '@prismicio/vue';
import HomepageHeader from '../components/sections/homepage/HomepageHeader.vue';
import HomepageTeamSection from '../components/sections/homepage/HomepageTeamSection.vue';
import Footer from '../components/layout/Footer.vue';
import HomepageContentSection from '../components/sections/homepage/HomepageContentSection.vue';

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
