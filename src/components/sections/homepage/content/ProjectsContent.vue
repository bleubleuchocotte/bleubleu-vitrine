<template>
  <article class="projects-content">
    <Title class="projects-content__title">
      <prismic-text :field="title" />
    </Title>
    <Link
      to="/projects"
      text="Our projects"
      type="internal"
    />
  </article>
</template>

<script setup>
import { defineProps } from 'vue';
import Link from '../../../UI/Link.vue';
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
  linkName: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>
.projects-content {
  padding: 28px 32px;
}

.projects-content__title {
  display: block;
  max-width: 50%;
}
</style>