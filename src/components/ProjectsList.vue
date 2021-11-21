<template>
  <section class="section section--projects-list">
    <div
      v-for="(project, i) in projects"
      :key="i"
      class="project"
    >
      <prismic-rich-text :field="project.data.title" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  projects: {
    required: true,
    type: Array,
  },
})
</script>
