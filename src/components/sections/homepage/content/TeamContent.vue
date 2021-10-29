<template>
  <article class="team-content">
    <Title class="team-content__title">
      <prismic-text :field="title" />
    </Title>
    <Link
      :url="link.url"
      :target="link.target"
      :text="linkName"
    />
  </article>
</template>

<script setup>
import Link from '../../../UI/Link.vue';
import { defineProps } from 'vue';
import Title from '../../../UI/Title.vue';

defineProps({
  title: {
    type: Array,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  link: {
    type: Object,
    required: true,
  },
  linkName: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>
.team-content {
  padding: 28px 32px;
}

.team-content__title {
  display: block;
  max-width: 80%;
}
</style>