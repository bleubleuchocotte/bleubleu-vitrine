<template>
  <Header />
  <HomepageEntrySection />
  <div v-if="document">
    <Team :members="document.data.team_members" />
  </div>
  <Footer />
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
  document.value = await client.getSingle('home_page', {}, null);
  console.log(document.value);
}

getContent()
</script>
