<template>
  <Header />
  <router-link to="/projects">Our projects</router-link>
  <div v-if="response">
    <Team :members="response.data.team"/>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Team from '../components/Team.vue';
import { usePrismic } from '@prismicio/vue';
import { ref } from 'vue';

const { client } = usePrismic();
let response = ref(null);

async function getContent() {
  response.value = await client.getSingle('home_page', {}, null);
  console.log(response.value);
}

getContent()
</script>
