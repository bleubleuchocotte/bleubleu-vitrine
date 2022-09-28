<template>
  <div
    v-if="document"
    class="home-page"
  >
    <HeaderNewDesign :socials="document.data.socials" />
    <HomepageAfterHeaderSection :fields="document.data" />
    <HomepageAgencySection />


    <Footer />
  </div>

  <span class="line-bottom o-grid-item--full-bottom" />
</template>

<script setup>
import { ref } from 'vue';
import { usePrismic } from '@prismicio/vue';
import Footer from '../components/layout/Footer.vue';
import HeaderNewDesign from '../components/layout/HeaderNewDesign.vue';
import HomepageAfterHeaderSection from '../components/sections/homepage/HomepageAfterHeaderSection.vue';
import HomepageAgencySection from '../components/sections/homepage/HomepageAgencySection.vue';

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
