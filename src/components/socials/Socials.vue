<template>
  <div class="socials">
    <a
      v-for="({ media }, i) in fields"
      :key="i"
      :href="media.data.link.url"
      :target="media.data.link.target"
      class="social-media"
    >
      {{ media.data.name }}
    </a>
  </div>
</template>

<script setup>
import { defineProps} from 'vue';

defineProps({
  fields: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>

</style>