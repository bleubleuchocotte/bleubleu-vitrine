<template>
  <footer class="footer" />
</template>

<script setup>
import { ref } from 'vue';
import { usePrismic } from '@prismicio/vue';

const { client } = usePrismic();
let footer = ref(null);

async function getFooterContent() {
  footer.value = await client.getSingle('footer', {}, null);
  console.log(footer.value);
}

getFooterContent()
</script>

<style scoped>

</style>