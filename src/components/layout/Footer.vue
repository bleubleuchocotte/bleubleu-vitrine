<template>
  <footer
    v-if="footer"
    class="footer"
  >
    <Socials :fields="footer.data.socials" />
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { usePrismic } from '@prismicio/vue';
import Socials from '../socials/Socials.vue';

const { client } = usePrismic();
let footer = ref(null);

async function getFooterContent() {
  footer.value = await client.getSingle('footer', {
    fetchLinks: ['social_media.name', 'social_media.link'],
  }, null);
  console.log(footer.value);
}

getFooterContent()
</script>

<style scoped>

</style>