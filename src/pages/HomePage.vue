<template>
  <Header />
  <router-link to="/projects">
    Our projects
  </router-link>
  <div v-if="document">
    <Team :members="document.data.team" />
  </div>
  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Team from '../components/Team.vue';
import { usePrismic } from '@prismicio/vue';
import { ref } from 'vue';
import Footer from '../components/layout/Footer.vue';

const { client } = usePrismic();
let document = ref(null);

async function getContent() {
  document.value = await client.getSingle('home_page', {}, null);
  console.log(document.value);
}

getContent()
</script>
